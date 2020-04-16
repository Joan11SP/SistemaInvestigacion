const capacitacion = require('../Models/model_capacitacion');

const saveCapacitacion = async (req,res)=>{
    const {persona,tipo,instructor,fecha_inicio,fecha_fin,name,institucion_organiza,nhoras} =req.body
    const save = await new capacitacion({
        persona,tipo,instructor,fecha_inicio,fecha_fin,name,institucion_organiza,nhoras
    });
    save.save();
    res.status(200).json(save);
}

const updateCapacitacion = async (req,res)=>{
    const {_id,persona,tipo,instructor,fecha_inicio,fecha_fin,name,institucion_organiza,nhoras} =req.body
    const update = await capacitacion.updateOne({_id:_id},{
        $set:{persona,tipo,instructor,fecha_inicio,fecha_fin,name,institucion_organiza,nhoras}
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