const axios = require('axios');

const direccionLatLon = async(dir) => {
    let encodedDireccion = encodeURI(dir);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedDireccion}`,
        headers: { 'X-RapidAPI-Key': '43f7c7493emsh437b963edbfec8ep1e1af9jsn22ec05782f1e' }
    });

    let lugar = await instance.get();
    if (lugar.data.Results.length == 0) {
        throw new Error(`Error al intentar ubicar ciudad ${dir}`)
    } else {
        let data = lugar.data.Results[0]
        return {
            direccion: data.name,
            lat: data.lat,
            lon: data.lon
        }
    }
}

module.exports = {
    direccionLatLon
}