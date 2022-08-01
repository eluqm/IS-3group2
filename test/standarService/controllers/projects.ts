import { Request, Response } from "express";
import projectResearch from "../models/project";

export const getProjectsFromDB = async (req: Request, res: Response) : Promise<any> => {
  try {
    const projects = await projectResearch.findAll();
    res.json({
      projects,
      msg: 'projects list'
    })
  } catch (error : any) {
    throw new Error(error);
  }
}

export const getProjectsByFaculty = async (req: Request, res: Response) : Promise<any> => {
  const { id } = req.params;
  try {
    const project = await projectResearch.findByPk( id );
    if (!project) {
      res.status(404).json({
        msg: `project with id ${id} doesn't exist`
      });
    } else {
      res.json(project);
    }
  } catch (error : any) {
    throw new Error(error);
  }
}

export const putLoveProjectById = async (req: Request, res: Response) : Promise<any> => {
  const { id } = req.params;
  try {
    const project = await projectResearch.findOne({
      where: {
        idDoc : id
      }
    });
    if (!project) {
      return res.status(400).json({
        msg: `the project with ${id} doesn't exist`
      });
    } else {
      const x : any = project?.get('Likes');
      await project.update({
        Likes : x + 1
      });
      return res.json({
        msg: `the like to project with id ${id} processed`
      });
    }
  } catch (error : any) {
    throw new Error(error);
  }
}
