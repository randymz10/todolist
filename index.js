import express from "express";

const app = express();
const port = 3000;

app.get("/api/todo", (req, res) => {
    res.send('Get all todos');
});

app.get('/api/todo/:id', (req, res) => {
    res.send('Get todo by id');
})

app.post("/api/todo/new", (req, res) => {
  res.send("Create new todo");
});

app.patch("/api/todo/edit/:id", (req, res) => {
    res.send('Update todo');
});

app.delete('/api/todo/:id', (req, res) => {
    res.send('Delete note by id');
});

app.listen(port, () => console.log(`App running on port ${port}`));
