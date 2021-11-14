import express, {
  Request,
  Response,
} from 'express';
import ReservationModel from 'models/Reservation';
import { Reservation } from 'types/Reservation';

const router = express.Router();

router.get('reservation/all', async (req: Request, res: Response) => {
  res.status(200).json({
          error: null,
          data: "Hello world"
        });
  // ReservationModel.find({}, (err, found) => {
  //   if (!err) {
  //     res.status(200).json({
  //       error: null,
  //       data: found,
  //     });
  //   } else {
  //     res.status(200).json({
  //       error: "No reservations found",
  //       data: null,
  //     });
  //   }
  // });
});

router.post('/reservation', async (req: Request, res: Response) => {
  const reservationData: Reservation = req.body.reservation;

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