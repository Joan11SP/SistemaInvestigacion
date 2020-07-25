const people = require("../Models/model_people");
const validar = require("../Utilities/utilities_dni");
const carrer = require("../Models/model_carrer");
const brycpt = require("bcrypt");

var BCRYPT_SALT_ROUNDS = 12;
const savePeople = async (req, res) => {
  //password = await brycpt.hash(password, BCRYPT_SALT_ROUNDS);
  const person = new people(req.body);
  await validarDni(req.body.dni, person, res);
};
const searchPeople = async (req, res) => {
  try {
    const person = await people.find({ status: { $in: [1] } });
    const carrers = await carrer.find({});
    person.forEach((data) => {
      carrers.forEach((data2) => {
        if (data.id_carrer == data2._id) {
          data.name_carrer = data2.nameCarrer;
        }
      });
    });
    res.status(200).json(person);
  } catch (err) {
    console.log(err);
  }
};

//Update a person
const updatePerson = async (req, res) => {
  if (validar(req.body.dni) === true) {
    const update = await people.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    if (update.nModified == 1) {
      res.json({ mensaje: "modificado" });
    } else {
      res.json({ mensaje: "no_modificado" });
    }
  } else {
    res.json({ mensaje: "cedula_incorrecta" });
  }
};

// delete a person
const deletePerson = async (req, res) => {
  try {
    const deleted = await people.updateOne(
      { _id: req.body._id },
      {
        $set: { status: 0 },
      }
    );
    res.status(200).json(deleted);
  } catch (err) {
    console.error(err);
  }
};
const login = async (req, res) => {
  /*const login = await people.find(
    { dni: req.body.dni, status: { $in: [1] } },
    { dni: 1, names: 1, password: 1 }
  );
  login.forEach((data) => {
    var password = brycpt.compare(req.body.password, data.password);
    password.then((data2) => {
      if (login.length ==1) {
        res.status(200).json({ dni: data.dni, names: data.names });
      } else {
        res.json({ mensaje: "no_existe" });
      }
    });
  });*/
  const login = await people.find(
    { dni: req.body.dni, password: req.body.password, status: { $in: [1] } },
    { dni: 1, names: 1 }
  );
  if (login.length == 1) {
    res.status(200).json(login);
  } else {
    res.json({ mensaje: "no_existe" });
  }
};

//validar si ya esta creada la persona
const validarDni = async (dni, person, res) => {
  const persons = await people.find({ dni: dni }, { status: { $in: [1] } });
  if (validar(dni) === true) {
    if (persons.length == 0) {
      await person.save();
      res.json({ mensaje: "guardado" });
    } else {
      res.json({ mensaje: "cedula_yaRegistrada" });
    }
  } else {
    res.json({ mensaje: "cedula_incorrecta" });
  }
};

const exportsPerson = async (req, res) => {
  const personas = await people.find(
    { status: { $in: [1] } },
    { password: 0, _id: 0, status: 0, __v: 0 }
  );
  const carrers = await carrer.find({});
  var docente = "Docente";
  var estudiante = "Estudiante";
  var data_person = [];
  var exports = [];
  await personas.forEach((data) => {
    carrers.forEach((data2) => {
      if (data.student_teacher == "D") {
        data.student_teacher = docente;
      } else if (data.student_teacher == "E") {
        data.student_teacher = estudiante;
      }
      if (data.id_carrer == data2._id) {
        data.name_carrer = data2.nameCarrer;
      }
    });

    data_person.push(data);
  });
  try {
    for (const element of data_person) {
      // const element = data_person[i];
      exports.push({
        Cédula: element.dni,
        "Nombres ": element.names,
        "Correo ": element.email,
        "Genero ": element.gender,
        "Celular ": element.phone,
        "Nivel de Educacción": element.nivel_educacion,
        "Título ": element.titulo,
        "Docente o Estudiante": element.student_teacher,
        "Carrera ": element.name_carrer,
        "Linea de Investigación ": element.linea_investigacion,
        "Número de horas de dedicación semanal":
          element.nroHorasDedicacionSemanal,
        "Orcid ": element.orcid,
      });
    }
    res.status(200).json(exports);
  } catch (error) {
    return false;
  }
};

module.exports = {
  savePeople,
  searchPeople,
  updatePerson,
  deletePerson,
  login,
  exportsPerson,
};
