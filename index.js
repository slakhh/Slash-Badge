
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js"); //obtenemos desde djs
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits; // definimos los int necesarios
const { User, Message, GuildMember, ThreadMember, Channel } = Partials; // definimos los partials necesarios
const { cargarEventos } = require("./handlers/handevent") // metemos la function creada al index from /hand
const { cargarComandos } = require("./handlers/handcomm") // lo mismo
require("colors") // opcional (color a console)
json = require("./config.json") // hacemos un acceso a config y sus propiedades
const client = new Client({ // hacemos la constante client
    intents: [Guilds, GuildMembers, GuildMessages], // usamos los int predefinidos
    partials: [User, Message, GuildMember, ThreadMember],  // partials predefinidos
});
client.commands = new Collection(); // collecion d cmds
client.login(json.token).then(() => {  // logeamos el bot usando el acceso y la prop token
    cargarEventos(client); // y usamos la funcion pasandole x parametro client
    cargarComandos(client); // lo mismo
});