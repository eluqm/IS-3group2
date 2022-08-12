import {Router} from "express";
import {authUser, signNewUser, getDataFromUserById, updateUser} from "../controllers/user.controller.js";
import {deleteItemById, getProjectsById, postNewProject} from "../controllers/projec.controller.js";

import {verifyToken} from "../utils/token.utils.js";

const router = Router();

router.post('/re/auth', authUser);
router.post('/re/sign', signNewUser);
router.get('/re/:id', getDataFromUserById);
router.put('/re/:id', updateUser);

router.get('/re/:id/proj', verifyToken, getProjectsById);
router.delete('/re/:id', deleteItemById);

router.post('/res/addproj', postNewProject);

export default router;
