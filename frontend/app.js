import express from 'express';
import cors from 'cors';
import Studentrouter from './routers/studentrouter.js';
import Teacherrouter from './routers/teacherrouter.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/student", Studentrouter);
app.use("/api/teacher", Teacherrouter);

export default app;