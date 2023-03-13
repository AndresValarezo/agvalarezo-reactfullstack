import { Router } from "express";
import Task from "../models/task";

const router = Router();

router.get('/tasks', async (request, response) => {
    try {
        const tasks = await Task.find();
        response.status(200).json(tasks);
    } catch (error: any) {
        response.status(404).json({ message: error.message });
    }
});

router.post('/newTask', async (request, response) => {
    const task = request.body;
    const newTask = new Task(task);

    try {
        await newTask.save();
        response.send(newTask);
    } catch (error: any) {
        response.status(500).json({ message: error.message });
    }
});

router.get('/task/:id', async (request, response) => {
    try {
        const task = await Task.findOne({ _id: request.params.id });
        response.status(200).json(task);
    } catch (error:any) {
        response.status(404).json({ message: error.message });
    }

});

router.delete('/task/:id', async (request, response) => {
    try {
        await Task.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'Deleted successfully' });
    } catch (error:any) {
        response.status(404).json({ message: error.message });
    }
});

router.put('/task/:id', async (request, response) => {
    try {
        let task = await Task.findById(request.params.id);

        if(!task) {
            response.status(404).json({ message: 'Task dont exist' });
        }
        task = await Task.findOneAndUpdate({ _id: request.params.id },request.body, {new: true} )
        response.status(200).json(task);
    } catch (error:any) {
        console.log(error);
        response.status(500).json({ message: error.message });
    }

});

export default router;
