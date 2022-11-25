const { Client } = require("discord.js")
module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("-------------------------------------------------------".cyan)
        console.log(`${client.user.username} esta conectado.`.magenta)
        console.log("-------------------------------------------------------".cyan)
    }
} 