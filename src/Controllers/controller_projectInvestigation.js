const project = require('../Models/model_projectInvestigation');
const article = require('../Models/model_articulos');
const saveProject = async (req, res) => {
    const { name, personal_involucrado, grupo_investigacion, fecha_inicio, fecha_fin, linea_investigacion,
        introduccion, justificacion, objetivos, materiales, resultados_esperados, presupuesto, cronograma,
        articulos_generados, estado_proyecto, id_group } = req.body

    try {
        const save = await new project({
            name, personal_involucrado, grupo_investigacion, fecha_inicio, fecha_fin, linea_investigacion,
            introduccion, justificacion, objetivos, materiales, resultados_esperados, presupuesto, cronograma,
            articulos_generados, estado_proyecto, id_group
        });
        save.save();
        res.status(200).json({ mensaje: "guardado" });
    } catch (err) {
        console.error(err)
    }
}
const searchProject = async (req, res) => {
    const search = await project.find({});
    search.forEach(data => {
        if (data.estado_proyecto == "E") {
            data.estado_proyecto = "Ejecutandose"
        }
        else if (data.estado_proyecto == "F") {
            data.estado_proyecto = "Finalizado"
        }
    })
    res.status(200).json(search);
}
const searchOneProject = async (req, res) => {
    const search = await project.find({ _id: req.body._id });
    const articulo = await article.find({ id_project: req.body._id });
    const generados = []
    search.forEach(data => {
        articulo.forEach(data2 => {
            if (data._id == data2.id_project) {
                generados.push(data2.name);
                data.articulos_generados = generados
            }
        })
    })    
    res.status(200).json(search);

}
const updateProyect = async (req, res) => {
    const { name, personal_involucrado, grupo_investigacion, fecha_inicio, fecha_fin, linea_investigacion,
        introduccion, justificacion, objetivos, materiales, resultados_esperados, presupuesto, cronograma,
        articulos_generados, estado_proyecto } = req.body

    const update = await project.updateOne({ _id: req.body._id }, {
        $set: {
            name, personal_involucrado, grupo_investigacion, fecha_inicio, fecha_fin, linea_investigacion,
            introduccion, justificacion, objetivos, materiales, resultados_esperados, presupuesto, cronograma,
            articulos_generados, estado_proyecto
        }
    })
    res.status(200).json(update);
}
const deleteProyect = async (req, res) => {
    const dele = await project.remove({ _id: req.body._id });
    res.status(200).json(dele)
}

module.exports = {
    saveProject,
    searchProject,
    searchOneProject,
    updateProyect,
    deleteProyect
}               