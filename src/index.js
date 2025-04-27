import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {connectDB} from './db/index.js';
dotenv.config({path:'./.env'});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});