const {Router} = require('express');
//controller of carrers
const {saveCarrer,searchCarrer} = require('../Controllers/controller_carrer');
//controller of person
const {savePeople,searchPeople,updatePerson,deletePerson,login} = require('../Controllers/controller_people');
//controller of group investigation
const {saveGroup,searchGroup,updateGroup,deleteGroup,allGroup} = require('../Controllers/controller_groupInvestigation');
//controller of project investigation
const {saveProject,searchProject,searchOneProject,deleteProyect,updateProyect} = require('../Controllers/controller_projectInvestigation')
//controller of seguimientos
const {saveSeguimiento,allSeguimiento,deleteSeguimiento} = require('../Controllers/controller_seguimientos');

//controller of Article
const {saveArticulo,allArticles,updateArticles,deleteArticle} =require('../Controllers/controller_articulo');
const router = Router();

// Routes to carrers
router.get('/allCarrer',searchCarrer);
router.post('/newCarrer',saveCarrer);

//Routes to people
router.post('/newPerson',savePeople);
router.get('/allPeople',searchPeople);
router.post('/updatePerson',updatePerson);
router.post('/deletePerson',deletePerson);
router.post('/login',login)

//Routes to group Investigation
router.post('/newGroupInvestigation',saveGroup);
router.post('/updateGroupInvestigacion',updateGroup);
router.post('/aGroupInvestigation',searchGroup);
router.post('/deleteGroupInvestigation',deleteGroup);
router.get('/allGroupInvestigation',allGroup)


//Routes to project Investigation
router.post('/saveProjectInvestigation',saveProject);
router.get('/allProjectInvestigation',searchProject);
router.post('/oneProjectInvestigation',searchOneProject);
router.post('/deleteProjectInvestigation',deleteProyect);
router.post('/updateProjectInvestigation',updateProyect);

//Routes to seguimientos
router.post('/newSeguimientos',saveSeguimiento);
router.get('/allSeguimientos',allSeguimiento);
router.post('/deleteSeguimientos',deleteSeguimiento);

//Routes to Article
router.post('/newArticle',saveArticulo);
router.get('/allArticle',allArticles);
router.post('/updateArticle',updateArticles);
router.post('/deleteArticle',deleteArticle);

module.exports=router;

