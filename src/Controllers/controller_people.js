const people = require('../Models/model_people');
const validar = require('../Utilities/utilities_dni');

const savePeople = async (req, res) => {
    const { dni, names, email, gender, phone, nroHorasDedicacionSemanal, titulo, nivel_educacion,
        id_carrer, linea_investigacion, orcid } = req.body
    const person = new people({
        dni, names, email, gender, phone, nroHorasDedicacionSemanal,
        titulo, nivel_educacion, id_carrer, linea_investigacion, orcid
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
        const person = await people.find({})
        res.status(200).json(person);
    } catch (err) {
        console.log(err)
    }
}

//Update a person 
const updatePerson = async (req, res) => {
    const { _id, dni, names, email, gender, phone, nroHorasDedicacionSemanal, titulo,
        nivel_educacion, id_carrer, linea_investigacion, orcid } = req.body

    if (validar(dni) === true) {
        await people.updateOne({ _id: _id }, {
            $set: {
                dni, names, email, gender, phone, nroHorasDedicacionSemanal,
                titulo, nivel_educacion, id_carrer, linea_investigacion, orcid
            }
        });
        res.json({ mensaje: "modificado" });
    } else {
        res.json({ mensaje: "cedula_incorrecta" })
    }

}

// delete a person 
const deletePerson = async (req, res) => {
    try {
        const deleted = await people.remove({ _id: req.body._id })
        res.status(200).json(deleted)
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    savePeople,
    searchPeople,
    updatePerson,
    deletePerson
}