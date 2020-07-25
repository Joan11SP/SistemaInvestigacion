const convenio = require('../Models/model_convenio');

const saveConvenio = async (req, res) => {
    const save = await new convenio( req.body);
    const is_saved = await save.save();
    is_saved!=null? 
        res.status(200).json(save)
    : res.status(200).json()
}

const updateConvenio = async (req, res) => {
    try{
        const update = await convenio.updateOne({ _id: req.body._id }, {
            $set:req.body
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
    const count = await convenio.find({status: { $in: [1] } }).count()
    res.status(200).json(count)
}

module.exports={
    allConvenio,
    saveConvenio,
    updateConvenio,
    deleteConvenio,
    countConvenio
}