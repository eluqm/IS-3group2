import { Router } from "express";
import {authenticateUser, Logout, postNewUser, updateUser} from "../controllers/user";
import {postNewProject, updateProject, getMineProjects, getProjects} from "../controllers/project";

import { verifytoken } from "../middleware/verifytoken";
import { refreshToken } from "../controllers/refreshToken";

const iRouter : Router = Router();

iRouter.post('/user', postNewUser);
iRouter.put('/user/:id', updateUser);


iRouter.post('/user/auth', authenticateUser);
iRouter.delete('/user/logout', Logout)
iRouter.get('/token', refreshToken);

iRouter.get('/projects', verifytoken, getProjects);
iRouter.post('/proj', postNewProject);
iRouter.get('/proj/:id', getMineProjects);

export default iRouter;