const project = require('../Models/model_projectInvestigation');

const saveProject = async (req, res) => {
    const { personal_involucrado, grupo_investigacion, fecha_inicio, fecha_fin, linea_investigacion,
        introduccion, justificacion, objetivos, materiales, resultados_esperados, presupuesto, cronograma,
        articulos_generados, estado_proyecto } = req.body

    try{
        const save = await new project({
            personal_involucrado, grupo_investigacion, fecha_inicio, fecha_fin, linea_investigacion,
            introduccion, justificacion, objetivos, materiales, resultados_esperados, presupuesto, cronograma,
            articulos_generados, estado_proyecto
        });    
        res.status(200).json(save);
    }catch(err){
        console.error(err)
    }
}

module.exports={
    saveProject
}