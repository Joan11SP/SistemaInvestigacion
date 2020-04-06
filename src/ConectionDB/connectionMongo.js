const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Bruja:1925BscJp@cluster0-hp4pe.mongodb.net/Investigacion?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db=>{console.log('conected to mongo')})
    .catch(err=>{console.error('Error the connection ',err)})

module.exports=mongoose