const axios = require('axios').default;


const peticionHttp = async(yargs) => {
    let city = yargs.direccion;
    const dir = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d93bec5c3c4c863ef0594b90fdaaa0de&units=metric`

    const peticion = await axios.get(dir)

    return peticion.data.main.temp;

}

module.exports = {
    peticionHttp
}