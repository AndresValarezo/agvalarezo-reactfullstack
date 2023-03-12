import express,{Router} from "express";
import {addToy} from "../controller/toy-controller.js";


const router= express.Router();

router.post('/newToy',addToy);


export default router;