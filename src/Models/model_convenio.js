const {Schema,model } = require('mongoose');

const convenioSchema= new Schema({
    nro:{type:String,trim:true},
    fecha_firma:{type:String,trim:true},
    obligaciones:{type:String,trim:true},
    beneficios:{type:String,trim:true},
    institucion:{type:String,trim:true},
    status:{type:Number,default:1}
});

const convenio = model('convenios',convenioSchema);
module.exports=convenio