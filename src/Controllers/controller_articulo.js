const articulo = require('../Models/model_articulos');

const saveArticulo = async (req, res) => {
    const { name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile } = req.body

    const save = await new articulo({
        name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
    });
    save.save();
    res.status(200).json({mensaje:1});
}

const allArticles = async (req, res) => {
    const all = await articulo.find({status: { $in: [1] } });
    res.status(200).json(all);
}

const updateArticles = async (req, res) => {
    const { name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
        anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile } = req.body

    const update = await articulo.updateOne({ _id: req.body._id },
        {
            $set: {
                name, id_project, personas, fecha_aceptacion, fecha_publicacion, tipo_document, indice,
                anio, idioma, pais, doi, issn, sjr, isbn, link, revista, quartile
            }
        });
    res.status(200).json(update);
}

const deleteArticle= async (req,res)=>{
    const del = await articulo.updateOne({_id:req.body._id}, {
        $set: {status:0}
    });
        res.status(200).json({mensaje:1})
    
}
const countArticles = async (req,res)=>{
    const count = await articulo.find({status: { $in: [1] } }).count()
    res.status(200).json(count)
}
module.exports = {
    saveArticulo,
    allArticles,
    updateArticles,
    deleteArticle,
    countArticles
}