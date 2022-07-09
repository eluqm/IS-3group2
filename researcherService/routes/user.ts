import { Router } from "express";
import {authenticateUser, postNewUser, updateUser} from "../controllers/user";

const iRouter : Router = Router();

iRouter.post('/user', postNewUser);
iRouter.put('/user/:id', updateUser);
iRouter.get('/user/auth', authenticateUser);

export default iRouter;