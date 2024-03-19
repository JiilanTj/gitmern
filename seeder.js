import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDb from './config/config.js';
import itemModel from './models/itemModel.js';
import items from './utils/data.js';
import colors from 'colors';

// config
dotenv.config();
connectDb();

// function seeder
const importData = async () => {
  try {
    await itemModel.deleteMany();
    const itemsData = await itemModel.insertMany(items);
    console.log('All Items Added'.bgGreen);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.inverse);
    process.exit(1);
  }
};

importData();