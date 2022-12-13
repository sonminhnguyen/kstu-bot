const bot = require('../bots')
const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');
const knex = require('../../database');
const { mock } = require('./mock')

const command = JSON.parse(JSON.stringify(mock[0]));
// const command = {
//     id: 1,
//     label: '/start',
//     depth: 0,
//     children: [
//         {
//             id: 101,
//             label: '8191-21',
//             depth: 1,
//             description: 'This is description',
//             file: 'fileURL',
//         },
//         {
//             id: 102,
//             label: '8191-22',
//             depth: 1,
//             description: 'This is description',
//             file: 'fileURL',
//         },
//         {
//             id: 103,
//             label: '8191-31',
//             depth: 1,
//             description: 'This is description',
//             file: 'fileURL',
//         },
//         {
//             id: 104,
//             label: '8191-11',
//             depth: 1,
//             description: 'This is description',
//             file: 'fileURL',
//         },
//     ]
// }



// console.log(command);

const scene = new Scene(`/scene`,
    async (ctx) => {
        console.log(command);
        ctx.scene.next();
        ctx.reply('Hello! Select document', null, Markup
            .keyboard(command.children.map(child => child.label))
            .oneTime(),
        );
    },
    async (ctx) => {
        ctx.scene.leave();
        const reply = command.children.filter(child => child.label === ctx.message.text)
        console.log(reply);
        ctx.reply(`Here is your doc ${reply[0].file}`);
    },
);

module.exports = scene;