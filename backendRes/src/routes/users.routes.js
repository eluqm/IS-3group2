import {Router} from "express";

import {authUser, 
        signNewUser, 
        getDataFromUserById, 
        updateUser,
        getAreasResearchById,
        addAreaResearchToUser} from "../controllers/user.controller.js";

import {deleteItemById, 
        getProjectsById, 
        postNewProject, 
        getProjectDataById, 
        addLabelById, 
        getLabelsById,
        getParticipants,
        addParticipante,
        updateProject,
        getProjectByFaculty,
        addLike,
        getSchoolInProjectById,
        addSchoolToProject} from "../controllers/projec.controller.js";

import {verifyToken} from "../utils/token.utils.js";

const router = Router();

router.post('/re/auth', authUser);
router.post('/re/sign', signNewUser);
router.get('/re/:id', getDataFromUserById);
router.put('/re/:id', updateUser);

router.get('/re/area/:id', getAreasResearchById);
router.post('/re/area', addAreaResearchToUser);

router.get('/re/:id/proj', verifyToken, getProjectsById);
router.delete('/re/:id', deleteItemById);
router.get('/res/:id', getProjectDataById);

router.get('/proj/:id', getProjectByFaculty);
router.put('/proj/:id', addLike);

router.put('/res/:id', updateProject);

router.post('/res/addproj', postNewProject);

router.post('/res/projLab', addLabelById);
router.get('/res/lab/:id', getLabelsById);

router.post('/res/part', addParticipante);
router.get('/res/part/:id', getParticipants);

router.get('/schools/:id', getSchoolInProjectById);
router.post('/schools', addSchoolToProject);

export default router;
