const seguimineto = require('../Models/model_seguimientProyectos');
const project = require('../Models/model_projectInvestigation');

const saveSeguimiento = async (req, res) => {
    const { id_project, month, qualification, observacion, novedades, percentage } = req.body
    const proyecto = await project.find({ _id: id_project, status: { $in: [1] } });
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
                    res.status(200).json({ mensaje: "Guardado" });
                } catch (err) {
                    console.error(err);
                }
            })
        }
    })
}
const allSeguimiento = async (req, res) => {
    const one = await seguimineto.find({ status: { $in: [1] } });
    const pro = await project.find({  status: { $in: [1] } });
    one.forEach(data => {
        pro.forEach(data2 => {
            if (data.id_project == data2._id) {
                data.name_projet = data2.name
            
            }
        })
    })
    
    res.status(200).json(one)
}


const deleteSeguimiento = async (req, res) => {
    const del = await seguimineto.updateOne({ _id: req.body._id }, {
        $set: { status: 0 }
    });
    res.status(200).json({ mensaje: "eliminado" });

}

module.exports = {
    saveSeguimiento,
    allSeguimiento,
    deleteSeguimiento
}