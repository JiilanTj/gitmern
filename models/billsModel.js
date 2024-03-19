import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  transactionId: {
    type: Number,
    required: true,
    unique: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Bills = mongoose.model('Bills', billSchema);

export default Bills;
