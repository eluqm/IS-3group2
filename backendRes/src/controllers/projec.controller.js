import { Project } from "../models/project.js";
import { Area } from "../models/areas.js";
import { Participante } from "../models/paticipantes.js";
import { Escuela } from "../models/escuelas.js";

export const deleteItemById = async (req, res) => {
  const {id} = req.params;
  try {
    const project = await Project.findOne({where: {idP: id}});
    if (project) {
      await project.destroy();
    }
    res.json({msg: 'OK'});
  } catch (err) {
    res.status(404).json({msg: 'Error in delete'});
  }
}

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (err) {
    res.status(404).json({msg: 'Error in getAllProjects'});
  }
}

export const getProjectDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Project.findByPk(id);
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({msg: 'Error in getProjectDataById'});
  }
}

export const getProjectsById = async (req, res) => {
  const {id} = req.params;
  try {
    const data = await Project.findAll({where:{id: id}});
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({msg: 'Error in getProjectsById'});
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

export const addLabelById = async (req, res) => {
  const { body } = req;
  try {
    const newLabel = new Area(body);
    await newLabel.save();
    res.status(200).json({msg: 'OK'});
  } catch (err) {
    res.status(404).json({msg: 'Error en addLabelById'});
  }
}

export const getLabelsById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Area.findAll({where: {idP: id}});
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({msg: 'Error en getLabelsById'});
  }
}

export const getParticipants = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Participante.findAll({where: {idP: id}});
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({msg: 'Error en getParticipants'});
  }
}

export const addParticipante = async (req, res) => {
  const { body } = req;
  const { idP } = body;
  try {
    const proj = await Project.findByPk(idP);
    let vacantes = proj?.get('vacantes');
    vacantes -= 1;
    await proj.update({vacantes});
    const newPart = new Participante(body);
    await newPart.save();
    res.status(200).json({msg: 'OK'});
  } catch (err) {
    res.status(404).json({msg: 'Error en addParticipante'});
  }
}

export const getProjectByFaculty = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Project.findAll({where: {idF: id}});
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({msg: 'Error en getProjectByFaculty'});
  }
}

export const addLike = async (req, res) => {
  const { id } = req.params;
  try {
    const exist = await Project.findByPk(id);
    if (exist) {
      let likes = exist?.get('likes');
      likes += 1;
      await exist.update({likes});
      res.status(200).json({msg: 'Actualizado'});
    } else {
      return res.status(400).json({msg: `The project with ${id} doesn't exist`});
    }
  } catch (err) {
    res.status(404).json({msg: 'Error en addLike'});
  }
}

export const getSchoolInProjectById = async (req, res) => {
  const { id } = req.params;
  try { 
    const exist = await Project.findByPk(id);
    if (exist) {
      const data = await Escuela.findAll({where: {idP: id}});
      res.status(200).json(data);
    } else 
      res.status(400).json({msg: `The project with ${id} doesn't exist`})
  } catch (err) {
    res.status(404).json({msg: 'Error en getSchoolInProjectById'});
  }
}

export const addSchoolToProject = async (req, res) => {
  const { body } = req;
  try {
    const newSchool = new Escuela(body);
    await newSchool.save();
    res.status(200).json({msg: 'OK'});
  } catch (err) {
    res.status(404).json({msg: 'Error en addSchoolToProject'});
  }
}
