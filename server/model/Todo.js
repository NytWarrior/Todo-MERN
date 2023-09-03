import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    status: {
        type: String, // "todo", "inprogress", "done"
        default: "todo" // Default status is "To Do"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;