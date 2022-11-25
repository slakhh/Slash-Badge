function cargarEventos(client) {
    const asctab = require("ascii-table")
    const fs = require("fs")
    const yulo = new asctab().setHeading("Events", "Status")
    const carpetas = fs.readdirSync("./events");
    for (const carp of carpetas) { 
        const archivos = fs.readdirSync(`./events/${carp}`).filter((arch) => arch.endsWith(".js"))
        for (const arch of archivos) {
            const ev = require(`../events/${carp}/${arch}`)

            if (ev.rest) {
                if(ev.once)
                    client.rest.once(ev.name, (...args) => 
                    ev.execute(...args, client)
                    );
                    else
                        client.rest.on(ev.name, (...args) =>
                            ev.execute(...args, client)
                        );
            } else {
                if (ev.once)
                    client.once(ev.name, (...args) => ev.execute(...args, client));
                else client.on(ev.name, (...args)  => ev.execute(...args, client));
            }
            yulo.addRow(arch, "loaded");
            continue;
        }
    }
    return console.log(yulo.toString(), "\nEventos cargados exitosamente.".magenta)
}
module.exports = {cargarEventos};