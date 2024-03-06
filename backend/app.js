import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import "dotenv/config";
import loginRouter from "./routes/loginRoute";
import todoRouter from "./routes/todoRoute";

const app = express();
const port = process.env.PORT;

//Routes
app.use("/api/", loginRouter);
app.use("/api/todo", todoRouter);

app.listen(port, () => console.log(`App running on port ${port}`));
