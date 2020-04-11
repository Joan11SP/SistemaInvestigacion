const seguimineto = require('../Models/model_seguimientProyectos');
const project = require('../Models/model_projectInvestigation');

const saveSeguimiento = async (req, res) => {
    const { id_project, month, qualification, observacion, novedades, percentage } = req.body
    const proyecto = await project.find({ _id: id_project });
    const result = []
    proyecto.forEach(data => {
        if (data._id == id_project) {
            result.push(data.resultados_esperados);
            result.forEach(data3 => {
                try {
                    const save = new seguimineto({
                        id_project, month,
                        qualification,
                        result_reach: data3,
                        observacion, novedades,
                        percentage
                    });
                    save.save();
                    res.status(200).json({mensaje:"Guardado"});
                } catch (err) {
                    console.error(err);
                }
            })
        }
    })
}
const allSeguimiento = async (req, res) => {
    const all = await seguimineto.find({})
    res.status(200).json(all)
}
const deleteSeguimiento = async (req, res) => {
    const del = await seguimineto.remove({ _id: req.body._id });
    if (del.deletedCount == 1) {
        res.status(200).json({ mensaje: "eliminado" });
    }
}

module.exports = {
    saveSeguimiento,
    allSeguimiento,
    deleteSeguimiento
}