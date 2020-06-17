const {Schema,model } = require('mongoose');

const archivoSchema = new Schema({
    id_article:{type:String,trim:true},
    id_archivo:{type:String,trim:true},
    tipo_archivo:{type:String,trim:true}
})

const archivo = model('archivos',archivoSchema);
module.exports = archivo