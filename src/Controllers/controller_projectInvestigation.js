const project = require('../Models/model_projectInvestigation');
const article = require('../Models/model_articulos');
const saveProject = async (req, res) => {
    try {
        const save = await new project(req.body);
        const is_saved = await save.save();
        is_saved !=null ? 
            res.status(200).json({ mensaje: "guardado" })
        :   res.status(200).json({ mensaje: "no_guardado" })
    } catch (err) {
        console.error(err)
    }
}
const searchProject = async (req, res) => {
    const search = await project.find({ status: { $in: [1] } });
    search.forEach(data => {
        if (data.estado_proyecto == "E") {
            data.estado_proyecto = "Ejecutandose"
        }
        else if (data.estado_proyecto == "F") {
            data.estado_proyecto = "Finalizado"
        }
        else if(data.estado_proyecto == "A"){
            data.estado_proyecto = "Aprobado"
        }
        else if(data.estado_proyecto == "AP"){
            data.estado_proyecto = "Por aprobar"
        }
    })
    res.status(200).json(search);
}
const searchOneProject = async (req, res) => {
    const search = await project.find({ _id: req.body._id, status: { $in: [1] } });
    const articulo = await article.find({ id_project: req.body._id, status: { $in: [1] } });
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
    const update = await project.updateOne({ _id: req.body._id }, {
        $set: req.body
    })
    res.status(200).json(update);
}
const deleteProyect = async (req, res) => {
    const dele = await project.updateOne({ _id: req.body._id }, {
        $set: { status: 0 }
    });
    res.status(200).json(dele)
}
const countProject = async (req, res) => {
    const ejecutandose = await project.find({ estado_proyecto: { $in: ["E"] }, status: { $in: [1] } }).count()
    const finalizado = await project.find({ estado_proyecto: { $in: ["F"] }, status: { $in: [1] } }).count()
    const porAprobar = await project.find({ estado_proyecto: { $in: ["PA"] }, status: { $in: [1] } }).count()
    const aprobado = await project.find({ estado_proyecto: { $in: ["A"] }, status: { $in: [1] } }).count()
    const preEjec = await project.aggregate([{
        $match: {
            $and: [
                { estado_proyecto: { $in: ["E"] }, status: { $in: [1] } }
            ]
        }
    }, {
        $group:
            { _id: 0, sum: { $sum: "$presupuesto" } }
    }]);
    const preFinal = await project.aggregate([{
        $match: {
            $and: [
                { estado_proyecto: { $in: ["F"] }, status: { $in: [1] } }
            ]
        }
    }, {
        $group:
            { _id: 0, sum: { $sum: "$presupuesto" } }
    }]);
    const prePor = await project.aggregate([{
        $match: {
            $and: [
                { estado_proyecto: { $in: ["PA"] }, status: { $in: [1] } }
            ]
        }
    }, {
        $group:
            { _id: 0, sum: { $sum: "$presupuesto" } }
    }]);
    const preApro = await project.aggregate([{
        $match: {
            $and: [
                { estado_proyecto: { $in: ["A"] }, status: { $in: [1] } }
            ]
        }
    }, {
        $group:
            { _id: 0, sum: { $sum: "$presupuesto" } }
    }])
    res.status(200).json({ ejecutandose, finalizado, porAprobar, aprobado, preEjec,preFinal,prePor,preApro });
}

module.exports = {
    saveProject,
    searchProject,
    searchOneProject,
    updateProyect,
    deleteProyect,
    countProject
}               