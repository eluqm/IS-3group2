import { Router } from "express";
import { authenticateUser, postNewUser, updateUser} from "../controllers/user";
import { postNewProject, updateProject, getMineProjects } from "../controllers/project";

import { verifytoken } from "../middleware/verifytoken";

const iRouter : Router = Router();

iRouter.post('/user', postNewUser);
iRouter.put('/user/:id', updateUser);
iRouter.post('/user/auth', authenticateUser);

iRouter.post('/proj', postNewProject);
iRouter.get('/proj/:id', getMineProjects);

export default iRouter;