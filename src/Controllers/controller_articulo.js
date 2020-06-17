const articulo = require('../Models/model_articulos');
const archivo = require('../Models/model_archivo');
const auth = require('../apiGoogleDrive/configDriveApi');
const { google } = require('googleapis');

const saveArticulo = async (req, res) => {
    const {
        name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
    } = req.body

    const save = await new articulo({
        name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
    });
    save.save();
    res.status(200).json({ mensaje: 1 });
}

const allArticles = async (req, res) => {
    const all = await articulo.find({ status: { $in: [1] } });
    const result = await archivo.find({});
    const drive = google.drive({ version: 'v2', auth });
    all.forEach(data2 => {
        result.forEach(data => {
            if (data.id_project == data2._id) {
                drive.files.get({
                    fileId: data.id_archivo,
                }, (err, resp) => {
                    if (err) { console.log(err) }
                    else {
                        data2.id_previewArchivo = resp.data.embedLink
                        data2.id_descargaArchivo = resp.data.webContentLink
                        data2.nombre_archivo = resp.data.title
                    }
                })
            }
        })
        
    });    
    res.status(200).json(all);
}

const updateArticles = async (req, res) => {
    const { 
        name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
    } = req.body

    const update = await articulo.updateOne({ _id: req.body._id },
        {
            $set: {
                name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
                anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
            }
        });
    res.status(200).json(update);
}

const deleteArticle = async (req, res) => {
    const del = await articulo.updateOne({ _id: req.body._id }, {
        $set: { status: 0 }
    });
    res.status(200).json({ mensaje: 1 })

}
const countArticles = async (req, res) => {
    const count = await articulo.find({ status: { $in: [1] } }).count()
    res.status(200).json(count)
}

module.exports = {
    saveArticulo,
    allArticles,
    updateArticles,
    deleteArticle,
    countArticles
}