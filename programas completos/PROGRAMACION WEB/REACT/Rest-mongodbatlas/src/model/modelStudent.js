const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,

    },
    lastName:{
        type: String,
        required: true,
    },

    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    nrc:{
        type: Number,
        required: true,

    }
}

);

module.exports = mongoose.model("Student", studentSchema);