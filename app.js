//require
const argv = require('./config/yargs').argv


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let commando = argv._[0]

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => {
                console.log(err)
            })
        break
    default: 
        console.log('Comando no reconocido')

}




