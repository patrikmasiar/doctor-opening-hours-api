import express, {
  Request,
  Response,
} from 'express';
import mongoose from 'mongoose';
import { Reservation } from 'types/Reservation';

const router = express.Router();

const reservationSchema = new mongoose.Schema({
  date: String,
  start: String,
  end: String,
});

const ReservationModel = mongoose.model('Reservation', reservationSchema);

router.get('/reservation/all', async (req: Request, res: Response) => {
  ReservationModel.find({}, (err, found) => {
    if (!err) {
      res.status(200).json({
        error: null,
        data: found,
      });
    } else {
      res.status(200).json({
        error: "No reservations found",
        data: null,
      });
    }
  });
});

router.post('/reservation', async (req: Request, res: Response) => {
  const reservationData = req.query as Reservation;
  const reservation = new ReservationModel(reservationData);

  reservation.save().then(() => {
    res.status(200).json({
      error: null,
      data: reservationData,
    });
  }).catch((error) => {
    res.status(200).json({
      error,
      data: null
    });
  });
});

export default router;