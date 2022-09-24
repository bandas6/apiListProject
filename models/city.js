
const { Schema, model } = require('mongoose');


const CitySchema = Schema({
    ciudad: {
        type: String,
    },
    departamento: {
        type: String,
    },
    pais: {
        type: String
    },
    
    
});


module.exports = model('City', CitySchema)
