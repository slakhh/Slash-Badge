
function cargarComandos(client) {
    const ascii = require("ascii-table");
    const fs = require("fs");
    const table = new ascii().setHeading("Commands", "Status");
    let commandsArray = [];
    const commandsFolder = fs.readdirSync("./comandos");
    for (const folder of commandsFolder) {
        const commandFiles = fs.readdirSync(`./comandos/${folder}`).filter((file) => file.endsWith(".js"));
        for (const file of commandFiles) {
            const commandFile = require(`../comandos/${folder}/${file}`);
            client.commands.set(commandFile.data.name, commandFile);
            commandsArray.push(commandFile.data.toJSON());
            table.addRow(file, "loaded");
            continue;
        }
    }
    client.application.commands.set(commandsArray)
    return console.log(table.toString(), "\nComandos Cargados exitosamente.".magenta)
}
module.exports = {cargarComandos};