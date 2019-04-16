const axios = require('axios');

const climaLatLon = async(lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=09eba9ed8d7d07f06ec79c2b4db36e76&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    climaLatLon
}