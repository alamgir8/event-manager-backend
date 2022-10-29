import { Entity, Schema } from 'redis-om';
import { redisClient } from '../db/index.js';

class EventRepository extends Entity {}

const eventSchema = new Schema(EventRepository, {
  title: { type: 'text' },
  description: { type: 'text' },
  category: { type: 'string' },
  venue: { type: 'string' },
  locationPoint: { type: 'point' },
  startDate: { type: 'date', sortable: true },
  endDate: { type: 'date', sortable: true },
  imageUrl: { type: 'string' },
  userId: { type: 'string' },
  createdAt: { type: 'date', sortable: true },
  updatedAt: { type: 'date', sortable: true },
}, {
  dataStructure: 'HASH'
});

const eventRepository = redisClient.fetchRepository(eventSchema);

await eventRepository.createIndex();

export { eventRepository };
