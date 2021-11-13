import express, {
  Request,
  Response,
} from 'express';
import { Reservation } from 'types/Reservation';
import { generateOccupiedTerms } from '../utils';

const router = express.Router();

router.get('/occupied-terms', async (req: Request, res: Response) => {
  res.status(200).json({
    error: null,
    data: generateOccupiedTerms(),
  });
});

router.post('reservation', async (req: Request, res: Response) => {
  const reservation: Reservation = req.body.reservation;

  // TODO: validation

  res.status(200).json({
    error: null,
    data: reservation,
  });
});

export default router;