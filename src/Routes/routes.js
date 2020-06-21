const {Router} = require('express');
//controller of carrers
const {saveCarrer,searchCarrer} = require('../Controllers/controller_carrer');
//controller of person
const {savePeople,searchPeople,updatePerson,deletePerson,login, exportsPerson} = require('../Controllers/controller_people');
//controller of group investigation
const {saveGroup,searchGroup,updateGroup,deleteGroup,allGroup,countGropu} = require('../Controllers/controller_groupInvestigation');
//controller of project investigation
const {saveProject,searchProject,searchOneProject,deleteProyect,updateProyect,countProject} = require('../Controllers/controller_projectInvestigation')
//controller of seguimientos
const {saveSeguimiento,allSeguimiento,deleteSeguimiento} = require('../Controllers/controller_seguimientos');

//controller of Article
const {saveArticulo,allArticles,updateArticles,deleteArticle,countArticles} =require('../Controllers/controller_articulo');

//controller of book
const {saveBook,allBooks,updateBook,deleteBook,countBook} = require('../Controllers/controller_book');

//controller of convenio
const {allConvenio,deleteConvenio,saveConvenio,updateConvenio,countConvenio} = require('../Controllers/controller_convenio'); 

//controller of capacitacion
const {allCapacitacion,deleteCapacitacion,saveCapacitacion,updateCapacitacion} = require('../Controllers/controller_capacitacion');
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
router.get('/exportToExcel',exportsPerson)

//Routes to group Investigation
router.post('/newGroupInvestigation',saveGroup);
router.post('/updateGroupInvestigacion',updateGroup);
router.post('/aGroupInvestigation',searchGroup);
router.post('/deleteGroupInvestigation',deleteGroup);
router.get('/allGroupInvestigation',allGroup);
router.get('/countGroupInvestigation',countGropu)


//Routes to project Investigation
router.post('/saveProjectInvestigation',saveProject);
router.get('/allProjectInvestigation',searchProject);
router.post('/oneProjectInvestigation',searchOneProject);
router.post('/deleteProjectInvestigation',deleteProyect);
router.post('/updateProjectInvestigation',updateProyect);
router.get('/countProjectInvestigation',countProject);

//Routes to seguimientos
router.post('/newSeguimientos',saveSeguimiento);
router.get('/allSeguimientos',allSeguimiento);
router.post('/deleteSeguimientos',deleteSeguimiento);

//Routes to Article
//router.post('/newArticle',saveArticulo);
router.get('/allArticle',allArticles);
router.post('/updateArticle',updateArticles);
router.post('/deleteArticle',deleteArticle);
router.get('/countArticle',countArticles);

//Routes to book
router.post('/newBook',saveBook);
router.get('/allBook',allBooks);
router.post('/updateBook',updateBook);
router.post('/deleteBook',deleteBook);
router.get('/countBook',countBook);

//Routes to convenio
router.post('/newConvenio',saveConvenio);
router.post('/updateConvenio',updateConvenio);
router.post('/deleteConvenio',deleteConvenio);
router.get('/allConvenio',allConvenio);
router.get('/countConvenio',countConvenio);

//Routes to capacitacion
router.post('/newCapacitacion',saveCapacitacion);
router.post('/updateCapacitacion',updateCapacitacion);
router.post('/deleteCapacitacion',deleteCapacitacion);
router.get('/allCapacitacion',allCapacitacion);


module.exports=router;

