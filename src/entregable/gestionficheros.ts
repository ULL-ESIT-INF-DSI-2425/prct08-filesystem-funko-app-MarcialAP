import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { copyFile, fstat, lstat, opendir, readdir, rm, rename } from 'fs';
import { argv } from 'process';

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
    } else {
        directorio_principal.forEach((directorio_archivo) => {
            lstat(`${argv.nombre}/${directorio_archivo}`, (error, estadisticas) => {
                if (error) {
                    console.log("No se encuentra la ruta2");
                }
                else {
                    console.log(`Nombre: ${directorio_archivo} Tamaño: ${estadisticas.size} Fecha de modificación ${estadisticas.mtime}`);
                }
              })
        })
        
    }
  })
  
 }) .help() .argv;

 yargs(hideBin(process.argv))
 .command('borrar', 'Elimina un archivo de manera segura', {
 ruta: {
  description: 'Ruta del archivo que se desea eliminar',
  type: 'string',
  demandOption: true
 }
}, (argv) => {
 console.log(argv.ruta);
 const nombre : string = (argv.ruta)
 const nuevo_nombre = nombre.split(`/`);
 rename(argv.ruta, `pruebasfs/papelera/${nuevo_nombre[nuevo_nombre.length - 1]}`, (error) => {
   if (error) {
       console.log("No se puede encontrar el fichero que se desea borrar");
   }
 })
 
}) .help() .argv;
 