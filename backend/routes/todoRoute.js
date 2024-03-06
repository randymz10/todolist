import { Router } from "express";

const router = Router();

router.get("/api/todo", (req, res) => {
    // res.send('Get all todos');
    console.log(getAll());
});

router.get('/api/todo/:id', (req, res) => {
    res.send('Get todo by id');
})

router.post("/api/todo/new", (req, res) => {
  res.send("Create new todo");
});

router.patch("/api/todo/edit/:id", (req, res) => {
    res.send('Update todo');
});

router.delete('/api/todo/:id', (req, res) => {
    res.send('Delete note by id');
});

export default router;