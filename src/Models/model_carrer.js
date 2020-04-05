const {Schema,model} = require('mongoose');

var carrerSchema = new Schema({
    id:{type:String,trim:true,unique:true,auto:true},
    nameCarrer:{type:String,trim:true}
})
var carrera = model('carreras', carrerSchema);

module.exports = carrera;