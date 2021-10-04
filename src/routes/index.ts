import express, {
  Request,
  Response,
} from 'express';
import { generateOccupiedTerms } from '../utils';

const router = express.Router();

router.get('/occupied-terms', async (req: Request, res: Response) => {
  res.status(200).json({
    error: null,
    data: generateOccupiedTerms(),
  });
});

export default router;