import {Router} from "express";
import {authUser, signNewUser} from "../controllers/user.controller.js";
import {deleteItemById, getProjectsById} from "../controllers/projec.controller.js";

import {verifyToken} from "../utils/token.utils.js";

const router = Router();

router.post('/re/auth', authUser);
router.post('/re/sign', signNewUser)
router.get('/re/:id/proj', verifyToken, getProjectsById);
router.delete('/re/:id', deleteItemById)

export default router;
