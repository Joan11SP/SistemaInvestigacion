const convenio = require('../Models/model_convenio');

const saveConvenio = async (req, res) => {
    const { nro, fecha_firma, obligaciones, beneficios, institucion } = req.body
    const save = await new convenio({
        nro, fecha_firma, obligaciones, beneficios, institucion
    });
    save.save();
    res.status(200).json(save);
}

const updateConvenio = async (req, res) => {
    const { _id, nro, fecha_firma, obligaciones, beneficios, institucion } = req.body
    try{
        const update = await convenio.updateOne({ _id: _id }, {
            $set: { nro, fecha_firma, obligaciones, beneficios, institucion }
        });    
        res.status(200).json(update);
    }catch(err){
        console.errore(err)
    }

}
const deleteConvenio = async (req,res)=>{
    const { _id} = req.body
    try{
        const del = await convenio.updateOne({ _id: _id }, {
            $set: {status:0}
        });    
        res.status(200).json(del);
    }catch(err){
        console.errore(err)
    }
}

const allConvenio = async (req,res)=>{
    try{
        const all = await convenio.find({status: { $in: [1] } })   
        res.status(200).json(all);
    }catch(err){
        console.errore(err)
    }
}
const countConvenio = async (req,res)=>{
    const count = await convenio.find({status: { $in: [1] } }).limit(10)
    res.status(200).json(count)
}

module.exports={
    allConvenio,
    saveConvenio,
    updateConvenio,
    deleteConvenio,
    countConvenio
}