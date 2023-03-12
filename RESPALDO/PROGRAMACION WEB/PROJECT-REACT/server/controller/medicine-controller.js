
import Medicine from '../Schemas/medicineSchema.js';

export const addMedicine = async (request, response) => {
    const medicine = request.body;
    const newMedicine = new Medicine(medicine);

    try {
        await newMedicine.save();
        response.send("Medicine saved successfully");
        response.status(201).json(newMedicine);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }

};

export const addMedicineBacth = async (request, response) => {
    const medicine = request.body;
    medicine.description = medicine.description + " Lote Nuevo ";
    const newMedicine = new Medicine(medicine);
    try {
        await newMedicine.save();
        response.status(201).json(newMedicine);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }

};
export const addMedicineIncomplete = async (request, response) => {
    const medicine = request.body;
    const medicines = await Medicine.find({});
    var medicinesIds= new Array();
    var medicinesIdsSort = {};
    
    for (let i = 0; i < medicines.length; i++) {
       medicinesIds[i]=medicines[i].id;
    }
    medicinesIdsSort=medicinesIds.sort(function(a,b)
    {return b - a; 
    });

    if (medicine.id === undefined) {
        medicine.id =  medicinesIdsSort[0]+1;
    }
    if (medicine.name == '') {
        medicine.name = "Nombre Vacio";
    }
    if (medicine.description === "") {
        medicine.description = "Descripción vacia";
    }
    if (medicine.category === "") {
        medicine.category = "Categoria vacia";
    }
    if (medicine.quantity === '') {
        medicine.quantity = 0;
    }
    if (medicine.price === "") {
        medicine.price = "Precio vacio";
    }
    if (medicine.elabDate === "") {
        medicine.elabDate = "Fecha de elaboracion vacia";
    }
    if (medicine.expDate === "") {
        medicine.expDate = "Fecha de expiracion vacia";
    }

    const newMedicine = new Medicine(medicine);

    try {
        await newMedicine.save();
        response.status(201).json(newMedicine);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }

};

export const getAllMedicines = async (request, response) => {
    try {

        const medicines = await Medicine.find({}).sort({id:1});
        
        response.status(200).json(medicines);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};

export const getMedicine = async (request, response) => {
    try {

        const medicine = await Medicine.findOne({ id: request.params.id });
        response.status(200).json(medicine);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};

export const getMedicineName = async (request, response) => {
    try {

        const medicine = await Medicine.findOne({ name: request.params.name });
        response.status(200).json(medicine);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};
export const getMedicineCategory = async (request, response) => {
    try {

        const medicine = await Medicine.find({ category: request.params.category });
        response.status(200).json(medicine);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};

export const editMedicineId = async (request, response) => {
    const medicine = request.body;
    let editMedicine= new Medicine(medicine);
    try {
        await Medicine.updateOne({id: request.params.id}, {$set: { 
            name: editMedicine.name,
            description: editMedicine.description,
            category: editMedicine.category,
            quantity: editMedicine.quantity,
            price: editMedicine.price,
            elabDate: editMedicine.elabDate,
            expDate: editMedicine.expDate,
        }});
        response.status(200).json({message: ' medicine successfully updated'});
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};
export const editMedicineName = async (request, response) => {
    const medicine = await Medicine.findOne({ name: request.params.name });
    const medicines = await Medicine.find({});
    var medicinesIds= new Array();
    var medicinesIdsSort = {};
    var idAux=0;
    
    for (let i = 0; i < medicines.length; i++) {
       medicinesIds[i]=medicines[i].id;
    }
    medicinesIdsSort=medicinesIds.sort(function(a,b)
    {return b - a; 
    });

    for (let i = 0; i < medicines.length; i++) {
       
        if (medicines[i].id == request.body.id && medicines[i].name != request.params.name) {
            idAux = idAux+1;
        }
        if(idAux>= 1){
            medicine.id= medicinesIdsSort[0]+1;
        }
        if(idAux== 0){
            medicine.id= request.body.id;
        }


    }
    if(request.body.description)
    {
        medicine.description= request.body.description;
    }
    if(request.body.category)
    {
        medicine.category= request.body.category;
    }
    if(request.body.quantity)
    {
        medicine.quantity= request.body.quantity;
    }
    if(request.body.price)
    {
        medicine.price= request.body.price;
    }
    if(request.body.elabDate)
    {
        medicine.elabDate= request.body.elabDate;
    }
    if(request.body.expDate)
    {
        medicine.expDate= request.body.expDate;
    }
    try {
        await medicine.save();
        response.status(200).json({message: ' medicine successfully updated'});
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};
export const editMedicineCategory = async (request, response) => {
    let medicine= request.body;
    const medicineUpdated= new Medicine(medicine);
    try {
        await Medicine.updateOne({category: request.params.category}, {$set: { 
            id: request.params.id,
            name: editMedicine.name,
            description: editMedicine.description,
            quantity: editMedicine.quantity,
            price: editMedicine.price,
            elabDate: editMedicine.elabDate,
            expDate: editMedicine.expDate,
        }});
        response.status(200).json({message: ' medicine successfully updated'});
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

export const editMedicineQuantity = async (request, response) => {
    const medicine = await Medicine.findOne({ id: request.params.id });
    medicine.quantity = medicine.quantity-1;
    try {
        await medicine.save();
        response.status(200).json({message: ' medicine successfully updated'});
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

export const deleteMedicine = async (request, response) => {
    try {
        await Medicine.deleteOne({ id: request.params.id });
        response.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};
export const deleteMedicineActualDate = async (request, response) => {

    let date = new Date();
    let day = Number(date.getDate());
    let month = Number(date.getMonth() + 1);
    let year = Number(date.getFullYear());

    var dateMedicines = await Medicine.find({});
    var expMedicines = [];
    var j = 0;

    for (let i = 0; i < dateMedicines.length; i++) {
        let oldDate = dateMedicines[i]['expDate']
        let expDate = oldDate.split('-');
        let expDay = Number(expDate[0]);
        let expMonth = Number(expDate[1]);
        let expYear = Number(expDate[2]);

        if (expYear <= year && expMonth <= month && expDay <= day) {
            expMedicines[j] = dateMedicines[i]['id'];
            j = j + 1;
        }
    }

    j=0;
    
    for (let i = 0; i < expMedicines.length; i++) {
        try {
            await Medicine.deleteOne({ id: expMedicines[i] });
            j=j+1;
        } catch (error) {
            response.status(404).json({ message: error.message });
        }
    }
    
    if (j == expMedicines.length){
        response.status(200).json({ message: 'Expired medicine. Deleted successfully' });
    }
    
};

export const deleteMedicineQuantity = async (request, response) => {

    try {
        await Medicine.deleteOne({ quantity: request.params.quantity });
        response.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};

export const deleteMedicineCategory = async (request, response) => {

    try {
        await Medicine.deleteMany({ category: request.params.category });
        response.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

};

