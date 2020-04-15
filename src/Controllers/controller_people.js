const people = require('../Models/model_people');
const validar = require('../Utilities/utilities_dni');
const carrer = require('../Models/model_carrer');

const savePeople = async (req, res) => {
    const { dni, names, email, gender, phone, nroHorasDedicacionSemanal, titulo, nivel_educacion,
        id_carrer, linea_investigacion, orcid,password,student_teacher } = req.body
    const person = new people({
        dni, names, email, gender, phone, nroHorasDedicacionSemanal,
        titulo, nivel_educacion, id_carrer, linea_investigacion, orcid,password,student_teacher
    });

    const persons = await people.find({ dni: dni })
    if (validar(dni) === true) {
        if (persons.length == 0) {
            await person.save()
            res.json({ mensaje: "guardado" });
        }
        else {
            res.json({ mensaje: "cedula_yaRegistrada" })
        }
    } else {
        res.json({ mensaje: "cedula_incorrecta" })
    }
}
const searchPeople = async (req, res) => {
    try {
        const person = await people.find({status: { $in: [1] } });
        const carrers = await carrer.find({});
        person.forEach(data => {
            carrers.forEach(data2 => {
                if (data.id_carrer == data2._id) {
                    data.name_carrer = data2.nameCarrer                
                }
            })
        });
        res.status(200).json(person);
    } catch (err) {
        console.log(err)
    }
}

//Update a person 
const updatePerson = async (req, res) => {
    const { _id, dni, names, email, gender, phone, nroHorasDedicacionSemanal, titulo,
        nivel_educacion, id_carrer, linea_investigacion, orcid,password,student_teacher } = req.body

    if (validar(dni) === true) {
        const update = await people.updateOne({ _id: _id }, {
            $set: {
                dni, names, email, gender, phone, nroHorasDedicacionSemanal,
                titulo, nivel_educacion, id_carrer, linea_investigacion, orcid,password,student_teacher
            }
        });
        if(update.nModified == 1){
            res.json({ mensaje: "modificado" });
        }
        else{
            res.json({ mensaje: "no_modificado" });
        }
    } else {
        res.json({ mensaje: "cedula_incorrecta" })
    }

}

// delete a person 
const deletePerson = async (req, res) => {
    try {
        const deleted = await people.updateOne({ _id: req.body._id }, {
            $set: {status:0}
        })
        res.status(200).json(deleted)
    } catch (err) {
        console.error(err)
    }
}
const login = async (req,res)=>{
    const login = await people.find({dni:req.body.dni,password:req.body.password,status: { $in: [1] } },{dni:1,names:1})
    if(login.length==1){
        res.status(200).json(login)
    }
    else{
        res.json({mensaje:"no_existe"});
    }
}

module.exports = {
    savePeople,
    searchPeople,
    updatePerson,
    deletePerson,
    login
}