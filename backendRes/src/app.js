import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import {corsConfig} from "./utils/utils.js";
import router from "./routes/users.routes.js";

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.use(router);

export default app;
// Moroco estafador >:( 
