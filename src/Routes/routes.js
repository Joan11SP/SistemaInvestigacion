const {Router} = require('express');
//controller of carrers
const {saveCarrer,searchCarrer} = require('../Controllers/controller_carrer');
//controller of person
const {savePeople,searchPeople,updatePerson,deletePerson} = require('../Controllers/controller_people');
//controller of group investigation
const {saveGroup,searchGroup,updateGroup,deleteGroup} = require('../Controllers/controller_groupInvestigation');
//controller of project investigation
const {saveProject,searchProject,searchOneProject,deleteProyect,updateProyect} = require('../Controllers/controller_projectInvestigation')
const router = Router();

// Routes to carrers
router.get('/allCarrer',searchCarrer);
router.post('/newCarrer',saveCarrer);

//Routes to people
router.post('/newPerson',savePeople);
router.get('/allPeople',searchPeople);
router.post('/updatePerson',updatePerson);
router.post('/deletePerson',deletePerson);

//Routes to group Investigation
router.post('/newGroupInvestigacion',saveGroup);
router.post('/updateGroupInvestigacion',updateGroup);
router.get('/allGroupInvestigation',searchGroup);
router.post('/deleteGroupInvestigation',deleteGroup);

//Routes to project Investigation
router.post('/saveProjectInvestigation',saveProject);
router.get('/allProjectInvestigation',searchProject);
router.post('/oneProjectInvestigation',searchOneProject);
router.post('/deleteProjectInvestigation',deleteProyect);
router.post('/updateProjectInvestigation',updateProyect);
module.exports=router;

