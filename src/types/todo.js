const mongoose = require("mongoose")

const TodoModel = {
    text: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
}

module.exports = mongoose.model("Todo", TodoModel);