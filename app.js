const { direccionLatLon } = require('./clima/lugar.js')
const { climaLatLon } = require('./clima/clima.js')
const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'Nombre de la direccion de la cual quiero obtener el clima'
        }
    })
    .help()
    .argv;

direccionLatLon(argv.direccion)
    .then(direccionCompleta => {
        climaLatLon(direccionCompleta.lat, direccionCompleta.lon)
            .then(temp => console.log(temp))
    });