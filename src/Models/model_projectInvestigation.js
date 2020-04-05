const {Schema,model} = require('mongoose');

const projectSchema = new Schema({
    personal_involucrado:{type:Array},
    grupo_investigacion:{},
    fecha_inicio:{type:Date},
    fecha_fin:{type:Date},
    linea_investigacion:{type:String},
    introduccion:{type:String},
    justificacion:{type:String},
    objetivos:{type:Array},
    materiales:{type:Array},
    resultados_esperados:{type:String},
    presupuesto:{type:String},
    cronograma:{type:String},
    articulos_generados:{type:Number},
    estado_proyecto:{type:Number}

})

const project = model('project_investigations',projectSchema);
module.exports = project