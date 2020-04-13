const {Schema,model} = require('mongoose');

const groupInvestigationSchema = new Schema({
    name:{type:String},
    create_date:{type:Date},
    menbers:{type:Array},
    linea_investigacion:{type:String},
    project_generados:{type:Array},
    status:{type:Number,default:1}

});
const groupInvestigation = model('group_investigations',groupInvestigationSchema);
module.exports=groupInvestigation;