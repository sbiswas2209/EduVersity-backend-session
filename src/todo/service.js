const Todo = require('../types/todo');

async function addTodo(text) {
    const result = await Todo.create({
        text,
    });

    return result;
}

async function getTodos() {
    const result = await Todo.find({});

    return result;
}

async function markAsDone(id) {
    const result = await Todo.findByIdAndUpdate(id, { done: true, });

    return result;
}

async function deleteTodo(id) {
    const result = await Todo.findByIdAndDelete(id);

    return result;
}

module.exports = {
    addTodo,
    getTodos,
    markAsDone,
    deleteTodo,
}