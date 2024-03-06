import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import loginRouter from "./routes/loginRoutes.js";
import todoRouter from "./routes/todoRoutes.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.redirect('/api/login'));

//Routes
app.use("/api/", loginRouter);
app.use("/api/todo", todoRouter);



app.listen(port, () => console.log(`App running on http://localhost:${port}`));
