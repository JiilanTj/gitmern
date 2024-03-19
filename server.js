import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/config.js';

// dotenv config
dotenv.config();

// db config
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
import itemRoutes from './routes/itemRoutes.js';
app.use('/api/items', itemRoutes);

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
});