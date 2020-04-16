const {Schema,model} = require('mongoose');

const projectSchema = new Schema({
    name:{type:String,trim:true},
    personal_involucrado:{type:Array,trim:true},
    fecha_inicio:{type:Date,trim:true},
    fecha_fin:{type:Date,trim:true},
    linea_investigacion:{type:String,trim:true},
    introduccion:{type:String,trim:true},
    justificacion:{type:String,trim:true},
    objetivos:{type:Array,trim:true},
    materiales:{type:String,trim:true},
    resultados_esperados:{type:Array,trim:true},
    presupuesto:{type:Number,trim:true},
    cronograma:{type:String,trim:true},
    articulos_generados:{type:Array,trim:true},
    estado_proyecto:{type:String,trim:true},
    id_group:{type:String,trim:true},
    status:{type:Number,default:1}

})

const project = model('project_investigations',projectSchema);
module.exports = project