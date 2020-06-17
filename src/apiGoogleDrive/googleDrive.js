const { google } = require('googleapis');
const archivo = require('../Models/model_archivo');
const articulo = require('../Models/model_articulos');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const auth = require('./configDriveApi');
const { Router } = require('express');
const router = Router();

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, path.extname(file.originalname).toLocaleLowerCase())
    }
})
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const typesFile = /pdf|doc|docx|xlxs/
        const extname = typesFile.test(file.mimetype)
        const names = typesFile.test(path.extname(file.originalname).toLocaleLowerCase());
        if (names && extname) {
            return cb(null, true)
        } else {
            cb('no es uma imagen')

        }
    }
}).single('archivo')

router.post('/newArticle', upload, async (req, res) => {
    const {
        name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
    } = req.body
    
    const save = await new articulo({
        name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
    });
    if (name != null) {
        save.save();
    }
    if (req.file != null) { 
        const id = save._id  
            archivoUpload(id, req, res);
            console.log(save,req.file)
    }
    res.status(200).json({ mensaje: 1 });
})

const archivoUpload = async (idDrive, req, res) => {

    var folderId = '1_9jpM3Oop_ex8StniYkIvwq5ETwv20If';
    const drive = google.drive({ version: 'v3', auth });

    //metodo para subir un archivo al drive
    const saveInDrive = await drive.files.create({
        resource: {
            name: path.parse(req.file.originalname).name,
            parents: [folderId]
        },
        media: {
            mimeType: req.file.mimetype,
            body: fs.createReadStream(req.file.path)
        },
        fields: 'id'
    });
    const id_archivo =  saveInDrive.data.id;
    try {
        const saveArchivo = await archivo.insertMany({
            id_article: idDrive, id_archivo: id_archivo, tipo_archivo: req.file.mimetype
        });
        console.log(saveArchivo)
        res.status(200).json(saveArchivo);
    } catch (err) {
         console.log(err)
    }
}

module.exports = router
