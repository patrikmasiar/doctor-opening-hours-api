import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  date: String,
  start: String,
  end: String,
});

export default reservationSchema;