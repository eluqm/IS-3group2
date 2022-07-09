import { Router } from "express";
import { postNewUser } from "../controllers/user";

const iRouter : Router = Router();

iRouter.post('/newuser', postNewUser);

export default iRouter;