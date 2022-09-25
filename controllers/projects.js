const { response } = require("express");
const Project = require("../models/project");


const getProjects = async (req, res = response) => {

    const projects =  await Project.find();
    
    res.json({
       projects
    })
    
}


const postProjects = async (req, res = response) => {
    

    
    const { nombre , descripcion, cities} = req.body;
   
    const project = {
        nombre,
        descripcion,
        cities
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