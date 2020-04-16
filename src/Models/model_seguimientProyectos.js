const {Schema,model} = require('mongoose');

const seguimientoSchema = new Schema({
    id_project:{type:String,trim:true},
    month:{type:Date,trim:true},
    qualification:{type:String,trim:true},
    result_reach:{type:Array,trim:true},
    observacion:{type:Array,trim:true},
    novedades:{type:Array,trim:true},
    name_projet:{type:String,trim:true},
    status:{type:Number,default:1}
});
const seguimiento = model('seguimientos',seguimientoSchema);

module.exports = seguimiento;