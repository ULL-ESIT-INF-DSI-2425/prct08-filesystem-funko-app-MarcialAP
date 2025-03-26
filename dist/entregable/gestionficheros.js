import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { lstat, readdir, rename } from 'fs';
yargs(hideBin(process.argv))
    .command('ls', 'lista un directorio', {
    nombre: {
        description: 'Nombre del directorio',
        type: 'string',
        demandOption: true
    }
}, (argv) => {
    console.log(argv.nombre);
    readdir(argv.nombre, (error, directorio_principal) => {
        if (error) {
            console.log("No se encuentra la ruta");
        }
        else {
            directorio_principal.forEach((directorio_archivo) => {
                lstat(`${argv.nombre}/${directorio_archivo}`, (error, estadisticas) => {
                    if (error) {
                        console.log("No se encuentra la ruta2");
                    }
                    else {
                        console.log(`Nombre: ${directorio_archivo} Tamaño: ${estadisticas.size} Fecha de modificación ${estadisticas.mtime}`);
                    }
                });
            });
        }
    });
}).help().argv;
yargs(hideBin(process.argv))
    .command('borrar', 'Elimina un archivo de manera segura', {
    ruta: {
        description: 'Ruta del archivo que se desea eliminar',
        type: 'string',
        demandOption: true
    }
}, (argv) => {
    console.log(argv.ruta);
    const nombre = (argv.ruta);
    const nuevo_nombre = nombre.split(`/`);
    rename(argv.ruta, `pruebasfs/papelera/${nuevo_nombre[nuevo_nombre.length - 1]}`, (error) => {
        if (error) {
            console.log("No se puede encontrar el fichero que se desea borrar");
        }
    });
}).help().argv;
yargs(hideBin(process.argv))
    .command('mover', 'Mueve un archivo o directorio', {
    origen: {
        description: 'Ruta del archivo o directorio que se desea mover',
        type: 'string',
        demandOption: true
    },
    destino: {
        description: 'destino al que se desea mover el archivo o directorio',
        type: 'string',
        demandOption: true
    }
}, (argv) => {
    console.log(argv.origen);
    rename(argv.origen, argv.destino, (error) => {
        if (error) {
            console.log("No se puede encontrar el fichero o directorio que se desea mover");
        }
    });
}).help().argv;
yargs(hideBin(process.argv))
    .command('busqueda', 'Busca los archivos con una extension especifica en un directorio y sus subdirectorios', {
    ruta: {
        description: 'Ruta del archivo o directorio en el que se desea buscar',
        type: 'string',
        demandOption: true
    },
    extension: {
        description: 'Extensión que se desea buscar',
        type: 'string',
        demandOption: true
    }
}, (argv) => {
    const extension = RegExp(argv.extension);
    readdir(argv.ruta, { 'recursive': true }, (error, directorio_principal) => {
        if (error) {
            console.log("No se encuentra la ruta");
        }
        else {
            directorio_principal.forEach((directorio_archivo) => {
                if (typeof (directorio_archivo) === "string") {
                    if (extension.test(directorio_archivo)) {
                        console.log(directorio_archivo);
                    }
                }
            });
        }
    });
}).help().argv;
