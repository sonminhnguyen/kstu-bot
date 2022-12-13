require('dotenv').config()
const VkBot = require('node-vk-bot-api');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');
// const start = require('./scene/start')
const knex = require('../database');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
const { mock } = require('./scene/mock');

const bot = new VkBot({
  token: process.env.TOKEN,
});

// let scene = []
// mock.forEach(command => {
//   if (command.id !== 1) {
//     scene.push(
//       new Scene(`${command.label}`,
//         async (ctx) => {
//           ctx.scene.next();
//           ctx.reply('Hello! Select document', null, Markup
//             .keyboard(command.children.map(child => child.label))
//             .oneTime(),
//           );
//         },
//         async (ctx) => {
//           ctx.scene.leave();
//           const reply = command.children.filter(child => child.label === ctx.message.text)
//           ctx.reply(`Here is your doc ${reply[0].file}`);
//         },
//       )
//     )
//   } else {
//     scene.push(
//       new Scene(`${command.label}`,
//         async (ctx) => {
//           ctx.scene.next();
//           ctx.reply(`Enter your name: `)
//         },
//         // async (ctx) => {
//         //   ctx.scene.next();
//         //   ctx.session.name = ctx.message.text;
//         //   ctx.reply(`Enter your year: `)
//         // },
//         // async (ctx) => {
//         //   ctx.scene.next();
//         //   ctx.session.year = ctx.message.text;
//         //   ctx.reply(`Enter your telephone: `)
//         // },
//         // async (ctx) => {
//         //   ctx.scene.next();
//         //   ctx.session.telephone = ctx.message.text;
//         //   ctx.reply(`Enter your telephone: `)
//         // },
//         // async (ctx) => {
//         //   ctx.scene.next();
//         //   ctx.session.telephone = ctx.message.text;
//         //   ctx.reply(`Enter your telephone: `)
//         // },
//         async (ctx) => {
//           console.log(ctx.message.peer_id);
//           ctx.scene.next();
//           ctx.session.name = ctx.message.text;

//           ctx.reply('Hello! Select your group', null, Markup
//             .keyboard(command.children.map(child => child.label))
//             .oneTime(),
//           );
//         },
//         async (ctx) => {
//           ctx.scene.leave();
//           ctx.reply(`Welcome to group ${ctx.message.text}`)
//           try {
//             // await knex("students").insert({ name: ctx.session.name, id_vk: ctx.message.peer_id, group: ctx.message.text })
            
//           } catch (error) {
//             console.log(error);
//           }
//           // const reply = command.children.filter(child => child.label === ctx.message.text)
//           // console.log(reply);
//           // ctx.reply(`Here is your doc ${reply[0].file}`);
//         },
//       )
//     )
//   }
// })

// const session = new Session();
// const stage = new Stage(...scene)

// bot.use(session.middleware());
// bot.use(stage.middleware());

// mock.forEach(command => {
//   bot.command(`${command.label}`, (ctx) => {
//     ctx.scene.enter(`${command.label}`)
//   });
// })

bot.command('/end', async (ctx) => {
  await knex('students').where('id_vk', ctx.message.peer_id).del()
  ctx.reply('Thanks for using!')
})

// bot.command('/checkid', async (ctx) => {
//   // await knex('students').where('id_vk', ctx.message.peer_id).del()
//   ctx.reply(ctx.message.peer_id)
// })

bot.startPolling((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("new polling");
  }
});

module.exports = bot;