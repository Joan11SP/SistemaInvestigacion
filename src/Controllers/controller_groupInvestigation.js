const group = require('../Models/model_groupInvestigation');
const project = require('../Models/model_projectInvestigation')

const saveGroup = async (req, res) => {
    try {
        const gropuInvestigation = new group(req.body);

        const is_saved = await gropuInvestigation.save();
        is_saved !=null ? 
            res.status(200).json({mensaje:"guardado"})
        :   res.status(200).json({mensaje:"no_guardado"})
    } catch (err) {
        console.log(err)
    }
}
const updateGroup = async (req, res) => {
    const updated = await group.updateOne({ _id: req.body._id }, {
        $set: req.body
    })
    res.status(200).json(updated);
}
const searchGroup = async (req, res) => {
    const { _id } = req.body
    const projects = []
    try {
        const proyecto = await project.find({ id_group: _id ,status: { $in: [1] } });
        const search = await group.find({ _id: _id });
        proyecto.forEach(data => {
            search.forEach(data2 => {
                if (data.id_group == data2._id) {
                    projects.push(data.name);
                    data2.project_generados = projects
                }
            })
        });


        res.status(200).json(search)
    } catch (err) {
        console.log(err)
    }
}
const deleteGroup = async (req, res) => {
    try {
        await group.updateOne({ _id: req.body._id }, {
            $set: {status:0}
        })
        res.status(200).json({ delet: "eliminado" })
    } catch (err) {
        console.log(err)
    }
}
const allGroup = async (req, res) => {

    try {
        const search = await group.find({status: { $in: [1] } });
        res.status(200).json(search)
    } catch (err) {
        console.log(err)
    }
}
const countGropu = async (req,res)=>{
    const count = await group.find({status: { $in: [1] } }).count()
    res.status(200).json(count)
}

module.exports = {
    saveGroup,
    updateGroup,
    searchGroup,
    deleteGroup,
    allGroup,
    countGropu
}