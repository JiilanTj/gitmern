import express from 'express';
import { getItemController, addItemController, editItemController } from '../controllers/itemController.js';
import { addBillController } from '../controllers/billController.js'; // Import controller baru

const router = express.Router();

// routes
// Method - GET
router.get('/get-item', getItemController);

// Method - POST
router.post('/add-item', addItemController);

// Method - PUT
router.put('/edit-item', editItemController);

// Method - POST (untuk menambahkan bill)
router.post('/add-bill', addBillController);

export default router;
