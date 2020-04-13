const {Schema,model} = require('mongoose');

const bookSchema = new Schema({
    titulo:{type:String,trim:true},
    fecha_publicacion:{type:String,trim:true},
    personas:{type:Array,trim:true},
    editorial:{type:String,trim:true},
    tipo_libro:{type:String,trim:true},
    numero_paginas:{type:Number,trim:true},
    area_publicacion:{type:String,trim:true},
    isbn:{type:String,trim:true},
    status:{type:Number,default:1}
});

const book = model('libros',bookSchema);
module.exports=book