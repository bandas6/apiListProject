
const { Schema, model } = require('mongoose');


const ProjectSchema = Schema({
    nombre: {
        type: String,
    },
    descripcion: {
        type: String
    },
    city_id : {
        type : Schema.Types.ObjectId,
        ref: 'City',
        required: true
    }
    
});


module.exports = model('Project', ProjectSchema)
