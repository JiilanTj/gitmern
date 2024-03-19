import Bills from '../models/billsModel.js';

// add bill
const addBillController = async (req, res) => {
  try {
    const { itemId, transactionId, itemName, timestamp } = req.body;
    const newBill = new Bills({
      itemId,
      transactionId,
      itemName,
      timestamp,
    });
    await newBill.save();
    res.status(201).send('Bill Created Successfully!');
  } catch (error) {
    res.status(400).send('Error creating bill', error);
    console.log(error);
  }
};

export { addBillController };
