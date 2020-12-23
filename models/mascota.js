const moongose = require('mongoose')
const Schema = moongose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
})

//modelo
const Mascota = moongose.model('Mascota', mascotaSchema)

module.exports = Mascota;