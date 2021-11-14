import {
  Request,
  Response,
} from 'express';
import { Reservation } from 'types/Reservation';
import ReservationModel from '../models/Reservation';

const Reservation = {
  getAll: async (req: Request, res: Response): Promise<any> => {
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
  },
  create: async (req: Request, res: Response): Promise<any> => {
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
  },
};

export default Reservation;