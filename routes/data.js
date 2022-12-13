var express = require('express');
var path = require('path');
var router = express.Router();
const knex = require('../database')
var fs = require('fs');
const { sendMessage, deleteDoc, updateCommand, updateChild, uploadFileCommand } = require('../bot/utils/function')
const bot = require('../bot/bots')
/* GET home page. */

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './bot/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|rar|zip|doc|docx|pdf|ARW)$/)) {
      return cb(new Error('Please upload jpg, jpeg, png, rar, zip, doc, docx, pdf files'))
    }
    cb(undefined, true)
  }
})
router.post("/sendMessage",
  // auth,
  upload.array('file', 5),
  async (req, res, next) => {
    sendMessage(req.body, req.files)
    res.send("success")
  }, (error, req, res, next) => {
    console.log(error);
    res.status(400).send({ error: error.message })
  })
router.post("/updateCommandChildren",
  // auth,
  upload.array('file', 5),
  async (req, res, next) => {
    const { id, label, answer } = req.body;

    console.log(req.body);
    console.log(req.files.length);
    try {
      if(req.files.length !== 0) {
        const url = await updateChild(req.files)
        console.log(JSON.stringify(url));
        await knex('commandChildrens').where({ id: parseInt(id) }).update({file: JSON.stringify(url)})
      }
      await knex('commandChildrens').where({ id: parseInt(id) }).update({label: label, answer: answer})

    } catch (error) {
      console.log(error);
    }
    res.send("success")
  }, (error, req, res, next) => {
    console.log(error);
    res.status(400).send({ error: error.message })
  })

router.post('/deleteDoc',
  // auth, 
  async (req, res, next) => {
    // const {owner_id, doc_id} = req.body
    const owner_id = -207360925
    const doc_id = 650572336
    // console.log(req.body);
    const url = await bot.execute('docs.getWallUploadServer', {
      group_id: process.env.GROUP_ID
    })
    const response = await bot.execute('docs.delete', {
      file: upload.data.file
    })
    console.log(response);
  })

router.get('/getStudents', async (req, res, next) => {
  try {
    const dataStudent = await knex.select('id', 'id_vk', 'avatar', 'name', 'group', 'year', 'telephone', 'email', 'note', 'linkVK').table('students').orderBy('id');
    res.send(JSON.stringify(dataStudent));
  } catch (error) {
    console.log(error);
  }
});

router.get('/getCommands', async (req, res, next) => {
  try {
    const commands = await knex.select().table('commands');
    const commandChildren = await knex.select().table('commandChildrens');

    const result = commands.map(command => {
      const childrenFilter = commandChildren.filter(child => child.idparent === command.id)
      const children = childrenFilter.map(child => {
        return {
          id: child.id,
          label: child.label,
          depth: child.depth,
          answer: child.answer,
          file: child.file,
          idparent: child.idparent,
        }
      })
      return {
        id: command.id,
        label: command.label,
        depth: command.depth,
        children
      }
    })

    res.send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
});

router.get('/getInQueueRequires', async (req, res, next) => {
  try {
    const events = await knex.select().table('requires').where('solved', 0);
    console.log(events);
    res.send(JSON.stringify(events));
  } catch (error) {
    console.log(error);
  }
});
router.get('/getSolvedRequires', async (req, res, next) => {
  try {
    const events = await knex.select().table('requires').where('solved', 1);
    res.send(JSON.stringify(events));
  } catch (error) {
    console.log(error);
  }
});

router.post('/updateRequires', async (req, res, next) => {
  try {
    const backup = await knex.select().table('requires');
    try {
      //update here
    } catch (error) {
      console.log(error);
      await knex('requires').insert([...backup])
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/getEvents', async (req, res, next) => {
  try {
    const requires = await knex.select().table('events');
    res.send(JSON.stringify(requires));
  } catch (error) {
    console.log(error);
  }
});

router.post('/updateStudents', async (req, res, next) => {
  try {
    const backup = await knex.select().table('students');
    // try {
    //     await knex('students').truncate();
    //     await knex('students').insert([...req.body])
    // } catch (error) {
    //     console.log(error);
    //     await knex('students').insert([...backup])
    // }
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
