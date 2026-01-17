import express from 'express';
import cors from 'cors';
import Studentrouter from './routers/studentrouter.js';
import Teacherrouter from './routers/teacherrouter.js';
import Authrouter from './routers/authrouter.js'
import Adminrouter from "./routers/adminrouter.js"
import GradeRouter from"./routers/graderouter.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/auth", Authrouter)
app.use("/api/student", Studentrouter);
app.use("/api/teacher", Teacherrouter);
app.use("api/admin",Adminrouter);
app.use("api/grades",GradeRouter)

export default app;