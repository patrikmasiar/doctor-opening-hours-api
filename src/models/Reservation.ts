import mongoose from 'mongoose';
import reservationSchema from 'schema/Reservation';

const ReservationModel = mongoose.model('Reservation', reservationSchema);

export default ReservationModel;