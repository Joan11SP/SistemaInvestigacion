const {Schema,model} = require('mongoose');

const capacitacionSchema = new Schema({
    persona:{type:String,trim:true},
    tipo:{type:String,trim:true},
    instructor:{type:String,trim:true},
    fecha_inicio:{type:Date,trim:true},
    fecha_fin:{type:Date,trim:true},
    name:{type:String,trim:true},
    institucion_organiza:{type:String,trim:true},
    nhoras:{type:Number,trim:true},      
    status:{type:Number,default:1}
});

const capacitacion = model('capacitaciones',capacitacionSchema);

module.exports=capacitacion