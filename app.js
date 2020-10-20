const { peticionHttp } = require('./place/place');
const colors = require('colors');

const yargs = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'buscar una ciudad',
        demand: true
    }
}).argv;


peticionHttp(yargs).then(clima => {
            console.log(`la temperatura del clima en ${yargs.direccion} 
            es de ${(clima<=15?
            `${clima } 🌦`:
            `${clima}  🌞`)}`.blue)
        }).catch(err=>{
            console.log('la cuidad ' + yargs.direccion + ' no se ha encontrado ' );
        })