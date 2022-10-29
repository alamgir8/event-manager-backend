import { Router } from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  getEventsByUserId,
  getEventsNearMe,
  searchEvents,
} from '../controllers/event.js';
import { authGuard } from '../middleware/index.js';

const eventRouter = Router();

eventRouter.post('', createEvent);
eventRouter.get('', getAllEvents);
eventRouter.get('/users', authGuard, getEventsByUserId);
eventRouter.get('/locations', getEventsNearMe);
eventRouter.get('/search', searchEvents);
eventRouter.get('/:eventId', getEventById);

export { eventRouter };
