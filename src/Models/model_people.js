const { Schema, model } = require('mongoose');

const peopleSchema = new Schema({
    dni:{type:String},
    names:{type:String},
    email:{type:String},
    gender:{type:String},
    phone:{type:String},
    nroHorasDedicacionSemanal:{type:Number},
    titulo:{type:String},
    nivel_educacion:{type:String},
    id_carrer:{type:String}, 
    linea_investigacion:{type:String},
    orcid:{type:String},
    password:{type:String}
});

const people = model('personas',peopleSchema);
module.exports= people;