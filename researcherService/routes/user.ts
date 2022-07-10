import { Router } from "express";
import { authenticateUser, postNewUser, updateUser} from "../controllers/user";

import { postNewProject, updateProject, getMineProjects } from "../controllers/project";

const iRouter : Router = Router();

iRouter.post('/user', postNewUser);
iRouter.put('/user/:id', updateUser);
iRouter.get('/user/auth', authenticateUser);

iRouter.post('/proj', postNewProject);
iRouter.get('/proj/:id', getMineProjects);

export default iRouter;