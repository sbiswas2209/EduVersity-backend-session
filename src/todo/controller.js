const { Router } = require('express');
const { getTodos, addTodo, markAsDone, deleteTodo } = require('./service');

const router = Router();

router.get('/', async (req, res) => {
    const result = await getTodos();
    res.status(200).json({
        message: "Todos fetched successfully",
        data: result,
    });
});

router.post('/', async (req, res) => {
    const { text } = req.body;

    const result = await addTodo(text);

    res.status(201).json({
        message: "Todo created successfully",
        data: result,
    });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await markAsDone(id);

    res.status(200).json({
        message: "Todo updated successfully",
        data: result,
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await deleteTodo(id);

    res.status(200).json({
        message: "Todo deleted successfully",
        data: result,
    });
});

module.exports = router;