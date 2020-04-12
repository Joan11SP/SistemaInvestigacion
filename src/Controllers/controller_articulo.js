const articulo = require('../Models/model_articulos');

const saveArticulo = async (req, res) => {
    const { name,id_project, personas,fecha_aceptacion,fecha_publicacion,tipo_document,indice,
        anio,idioma,pais,doi,issn,sjr,isbn,link,revista,quartile } = req.body

    const save = await new articulo({
        name,id_project, personas,fecha_aceptacion,fecha_publicacion,tipo_document,indice,
        anio,idioma,pais,doi,issn,sjr,isbn,link,revista,quartile
    });
    save.save();
    res.status(200).json(save);
}

const allArticles = async (req,res)=>{
    const all = await articulo.find({});
    res.status(200).json(all);
}

module.exports={
    saveArticulo,
    allArticles
}