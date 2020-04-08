const {Schema,model} = require('mongoose');

const projectSchema = new Schema({
    nombre:{type:String,trim:true},
    personal_involucrado:{type:Array,trim:true},
    grupo_investigacion:{type:String,trim:true},
    fecha_inicio:{type:Date,trim:true},
    fecha_fin:{type:Date,trim:true},
    linea_investigacion:{type:String,trim:true},
    introduccion:{type:String,trim:true},
    justificacion:{type:String,trim:true},
    objetivos:{type:Array,trim:true},
    materiales:{type:String,trim:true},
    resultados_esperados:{type:Array,trim:true},
    presupuesto:{type:String,trim:true},
    cronograma:{type:String,trim:true},
    articulos_generados:{type:Array,trim:true},
    estado_proyecto:{type:String,trim:true}

})

const project = model('project_investigations',projectSchema);
module.exports = project