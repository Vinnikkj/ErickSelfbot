const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const colors = require("colors");
const fs = require("fs");
const sleep = require('system-sleep');

let membros = [];
let contador = 0;
let mensagem = fs.readFileSync("mensagem.txt").toString("utf-8");



client.on("ready", () => {
    console.log (`      Wark Erick Campoy               `.red)
	console.log (`Criador: ! ErickCampoy`.green)
    console.log (``)
	console.log(`[ErickDiv Conectado na conta:  ${client.user.tag}`.white)
    console.log(`[ErickDiv] BOT ID: ${client.user.id}`.white)
})


client.on("guildCreate", (guild) => {
    console.log(`[ErickDiv] A conta ${client.user.tag} Foi adicionado no servidor ${guild.name} || ID: ${guild.id}`.white)
});

client.on("guildDelete", (guild) => {
    console.log(`[ErickDiv] A conta ${clent.user.tag} Foi retirado do servidor ${guild.name} || ID: ${guild.id} || Membros: ${guild.memberCount}`.red)
});


//comando
client.on("message", (message) => {
    if(message.author.id !== client.user.id) return;
    if(message.content === "b!sair") {
        client.guilds.forEach((guild) => {
            guild.leave()
        })
    }
});


//evento message 1
client.on("message", (message) => {
    if (message.channel.id !== config.chatid1) return;
    if (message.author.id !== config.botid1) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
            //          console.log(`[ErickDiv] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 2
client.on("message", (message) => {
    if (message.channel.id !== config.chatid2) return;
    if (message.author.id !== config.botid2) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
                      console.log(`[ErickDiv Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 3
client.on("message", (message) => {
    if (message.channel.id !== config.chatid3) return;
    if (message.author.id !== config.botid3) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
            //          console.log(`[ErickDiv Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 4
client.on("message", (message) => {
    if (message.channel.id !== config.chatid4) return;
    if (message.author.id !== config.botid4) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
            //          console.log(`[ErickDiv] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 5
client.on("message", (message) => {
    if (message.channel.id !== config.chatid5) return;
    if (message.author.id !== config.botid5) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
            //          console.log(`[ErickDiv] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})


client.on('ready', () => {
    setInterval(function () {
        if (contador > 300) {
            console.log(`[ErickDiv] Opa enviei mensagem para 10 usuários, então irei dar uma pausa de 25 minutos `.yellow);
            sleep(20000 * 30000)
            contador = contador - 400
        } else {
            let membro = client.users.get(membros[0])
            if (!membro) return;
            console.log(`[ErickDiv] Enviando mensagem ao usuário ${membro.username}#${membro.discriminator}`.green)
            membro.send(mensagem).catch(err => {
                if (err.message === "Cannot send messages to this user") {
                    return console.log(`[ErickDiv] Não consegui enviar ao usuario ${membro.username}#${membro.discriminator} , :( `.white)
                }
            })
            contador++;
            membros.shift()
        }
    }, 30000)


})



process.on('unhandledRejection', (err, p) => {
    if (err)
        return;
});

client.login(config.token).catch(err => {
    if (err.message === "Incorrect login details were provided.") {
        return console.log(`[ErickDiv] Token não encontrada/inv.`.red)
    }
})