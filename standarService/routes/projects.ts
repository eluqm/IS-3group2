import { Router } from "express";
import { getProjectsFromDB, putLoveProjectById, getProjectsByFaculty } from "../controllers/projects";

const iRouter : Router = Router();

iRouter.get('/projects', getProjectsFromDB);
iRouter.get('/projects/faculty/:id', getProjectsByFaculty);
iRouter.put('/projects/:id', putLoveProjectById);

export default iRouter;
