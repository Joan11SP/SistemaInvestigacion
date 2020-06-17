const {Schema,model} = require('mongoose');

const articuloSchema = new Schema({
    name:{type:String,trim:true},
    id_project:{type:String,trim:true},
    personas:{type:Array,trim:true},
    fecha_aceptacion:{type:Date,trim:true},
    fecha_publicacion:{type:Date,trim:true},
    tipo_document:{type:String,trim:true},
    indice:{type:String,trim:true},
    anio:{type:Number,trim:true},
    idioma:{type:String,trim:true},
    pais:{type:String,trim:true},
    doi:{type:String,trim:true},
    issn:{type:String,trim:true},
    sjr:{type:String,trim:true},
    isbn:{type:String,trim:true},
    link:{type:String,trim:true},
    revista:{type:String,trim:true},
    quartile:{type:String,trim:true},
    id_descargaArchivo:{type:String,trim:true},
    id_previewArchivo:{type:String,trim:true},
    nombre_archivo:{type:String,trim:true},
    status:{type:Number,default:1}
});
const articulo = model('articulos',articuloSchema);

module.exports = articulo