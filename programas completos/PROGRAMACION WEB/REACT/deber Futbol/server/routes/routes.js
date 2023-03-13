import express,{Router} from "express";
import { addTeam, getAllTeams} from "../controller/team-controller.js";


const router= express.Router();

router.post('/add',addTeam);
router.get('/all',getAllTeams);

export default router;