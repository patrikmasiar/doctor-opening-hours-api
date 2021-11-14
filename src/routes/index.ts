import express from 'express';
import Reservation from '../controllers/Reservation';

const router = express.Router();

router.get('/reservation/all', Reservation.getAll);
router.post('/reservation', Reservation.create);

export default router;