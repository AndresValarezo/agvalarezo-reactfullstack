import express,{Router} from "express";
import {addUser, getAllUsers,getUser,editUser, deleteUser} from "../controller/user-controller.js";


const router= express.Router();

router.post('/add',addUser);
router.get('/all',getAllUsers);
router.get('/:id',getUser);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;