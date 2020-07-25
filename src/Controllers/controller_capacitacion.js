const capacitacion = require('../Models/model_capacitacion');

const saveCapacitacion = async (req,res)=>{
    const save = await new capacitacion(req.body);
    const i_saved = await save.save();
    i_saved !=null ? 
        res.status(200).json(save)
    : res.status(200).json()
}

const updateCapacitacion = async (req,res)=>{
    const update = await capacitacion.updateOne({_id:req.body._id},{
        $set:req.body
    });
    res.status(200).json(update);
}

const deleteCapacitacion = async (req,res)=>{
    const {_id} =req.body
    const update = await capacitacion.updateOne({_id:_id},{
        $set:{status:0}
    });
    res.status(200).json(update);
}

const allCapacitacion = async (req,res)=>{
    const all = await capacitacion.find({status: { $in: [1] } });
    res.status(200).json(all);
}

module.exports={
    saveCapacitacion,
    updateCapacitacion,
    deleteCapacitacion,
    allCapacitacion
}