import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: 'string',
        required: true,
        trim: true
    },
    description: {
        type: 'string',
        required: true,
        trim: true
    },
    done: {
        type: 'boolean',
        default: false
    }
});

export default model("Task",taskSchema);