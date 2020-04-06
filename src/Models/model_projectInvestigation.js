const {Schema,model} = require('mongoose');

const projectSchema = new Schema({
    personal_involucrado:{type:Array},
    grupo_investigacion:{type:Array},
    fecha_inicio:{type:Date},
    fecha_fin:{type:Date},
    linea_investigacion:{type:String},
    introduccion:{type:String},
    justificacion:{type:String},
    objetivos:{type:Array},
    materiales:{type:String},
    resultados_esperados:{type:Array},
    presupuesto:{type:String},
    cronograma:{type:String},
    articulos_generados:{type:Array},
    estado_proyecto:{type:String}

})

const project = model('project_investigations',projectSchema);
module.exports = project