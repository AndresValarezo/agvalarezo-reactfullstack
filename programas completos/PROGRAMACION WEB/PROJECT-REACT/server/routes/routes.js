import express,{Router} from "express";
import {addMedicineIncomplete,getMedicineName,getMedicineCategory,addMedicine, addMedicineBacth, getAllMedicines,getMedicine,editMedicineId,editMedicineQuantity, editMedicineName,editMedicineCategory, deleteMedicine,deleteMedicineActualDate,deleteMedicineCategory, deleteMedicineQuantity} from "../controller/medicine-controller.js";
import { addUser,deleteUser,editUser, getAllUsers, validateLogin , validateToken} from "../controller/user-controller.js";

const router= express.Router();
//Post methods
router.post('/newMedicine',addMedicine);
router.post('/newBatch',addMedicineBacth);
router.post('/medicineIncomplete',addMedicineIncomplete);//Bussines Uri
router.post('/newUser',addUser);
router.post('/login',validateLogin);
router.post('/Token',validateToken);

//Get methods
router.get('/all',getAllMedicines); //Bussines Uri
router.get('/:id',getMedicine);
router.get('/name/:name',getMedicineName);
router.get('/category/:category',getMedicineCategory);
router.get('/users/all',getAllUsers);


//Put methods
router.put('/:id',editMedicineId);
router.put('/name/:name',editMedicineName);
router.put('/user/:userName',editUser);
router.put('/quantity/:id',editMedicineQuantity);// Bussines Uri

//Delete methods
router.delete('/:id',deleteMedicine);
router.delete('/expDate/actualDate',deleteMedicineActualDate);//Bussines Uri
router.delete('/category/:category',deleteMedicineCategory);
router.delete('/user/:userName',deleteUser);


export default router;