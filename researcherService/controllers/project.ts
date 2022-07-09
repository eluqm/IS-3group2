import { Request, Response } from "express";
import Project from "../models/projects";

export const postNewProject = async (req: Request, res: Response): Promise<any> => {
  const { body } = req;
  try {
    const exist = await Project.findOne({
      where: {
        titulo: body.titulo
      }
    });
    if (!exist) {
      const project = new Project(body);
      await project.save();
      res.json({
        project,
        msg: `The project ${body.titulo} was saved `
      });
    } else {
      return res.status(400).json({
        msg: `The project with title ${body.titulo} already exist`
      });
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export const updateProject = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  const { body } = req;
  try {
    const exist = await Project.findByPk(id);
    if (!exist) {
      return res.status(400).json({
        msg: `The project with id ${id} doesn't exist`
      });
    }
    if (exist?.get('titulo') == body.titulo) {
      return res.status(400).json({
        msg: `The project ${body.titulo} is already in use`
      });
    } else {
      await exist.update(body);
      res.json({
        msg: `Changes made in ${id} user`
      });
    }
  } catch (error : any) {
    throw new Error(error);
  }
}