const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/SistemaInvestigacion',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db=>{console.log('conected to mongo')})
    .catch(err=>{console.error('Error the connection ',err)})

module.exports=mongoose