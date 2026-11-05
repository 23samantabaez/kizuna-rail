import { bookingPage, processBookingRequest } from '../controllers/book.js';

import confirmationPage from './confirm.js';

import listRoutesPage from '../controllers/routes/list.js';

import routeDetailsPage from '../controllers/routes/details.js';

import { Router } from 'express';

const router = Router();

// List all routes
router.get('/', listRoutesPage);

// Route details page
router.get('/:routeId', routeDetailsPage);

// Book ticket
router.get('/booking/:scheduleId', bookingPage);
router.post('/book', processBookingRequest);

// Booking confirmation page
router.get('/confirmation/:confirmationId', confirmationPage);

export default router;
