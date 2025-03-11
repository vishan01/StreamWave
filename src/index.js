const express= require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({path:'./.env'});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));