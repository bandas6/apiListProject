const { response } = require("express");
const Project = require("../models/project");


const getProjects = async (req, res = response) => {

    const projects =  await Project.find();
    
    res.json({
       projects
    })
    
}


const postProjects = async (req, res = response) => {
    
    const {id} = req.params;
    
    const { nombre , descripcion} = req.body;
   
    const project = {
        nombre,
        descripcion,
        city_id: id
    }
    const projecDB = new Project(project);

    if(!projecDB.nombre){
        return res.status(400).json({
            msg:'no date'
        })
    }

    projecDB.save();

    res.json({
        projecDB
    })

}

module.exports = {
    getProjects,
    postProjects
}