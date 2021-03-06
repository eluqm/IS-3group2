import { Project } from "../models/project.js";

export const deleteItemById = async (req, res) => {
  const {id} = req.params;
  try {
    const project = await Project.findOne({where: {idP: id}});
    if (project) {
      await project.destroy();
    }
    res.json({msg: 'OK'});
  } catch (err) {
    res.status(404).json({msg: 'Error in delete'})
  }
}

export const getProjectsById = async (req, res) => {
  const {id} = req.params;
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (err) {
    res.status(404).json({msg: 'Error in getProjectsById'})
  }
}

export const updateProject = async (req, res) => {
  const {id} = req.params;
  const {body} = req;
  try {
    const exist = await Project.findByPk(id);
    if (!exist)
      return res.status(400).json({msg: `The project with ${id} doesn't exist`});
    else {
      await exist.update(body);
      res.json({msg: `Changes made in ${id} project`});
    }
  } catch (err) {
    res.status(404).json({msg:'Error en updateProjects'})
  }
}

export const postNewProject = async (req, res) => {
  const {body} = req;
  try {
    const exist = await Project.findOne({where: {titulo: body.titulo}});
    if (exist)
      return res.status(400).json({msg: 'Project exist'});
    else {
      const project = new Project(body);
      await project.save();
      res.json({msg: 'Project saved'})
    }
  } catch (err) {
    res.status(404).json({msg: 'Error en postProject'});
  }
}
