const axios = require('axios');

const apiRoute = async(route, res) => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/${route}`)
        res.status(200).json({
            data: resp.data,
        })
}

module.exports = apiRoute

