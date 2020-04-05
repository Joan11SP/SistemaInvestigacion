const  carrera = require('../Models/model_carrer');

const saveCarrer = async (req,res)=>{
    const {id,nameCarrer} = req.body
    const carrer = new carrera();
    try{
        carrer.id = id;
        carrer.nameCarrer = nameCarrer;
        const new_carrer=await carrer.save();
        res.status(200).json(new_carrer)
    }catch(err){
        console.log(err)
    }
}
const searchCarrer = async(req,res)=>{
    const carrer = await carrera.find({});
    res.status(200).json(carrer)
}

module.exports={
    saveCarrer,
    searchCarrer
};