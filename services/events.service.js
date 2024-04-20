
import axios from 'axios';
 
class EventsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || 'http://localhost:5005'
    });
 
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');
 
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
 
      return config;
    });
  }
 
  // POST /api/projects
  createEvent = requestBody => {
    return this.api.post('/api/meetups', requestBody);
  };
 
  // GET /api/projects
  getAllEvents = () => {
    return this.api.get('/api/meetups');
  };
 
  // GET /api/projects/:id
  getEvent = id => {
    return this.api.get(`/api/meetups/${id}`);
  };
 
  // PUT /api/projects/:id
  updateEvent = (id, requestBody) => {
    return this.api.put(`/api/meetups/${id}`, requestBody);
  };
 
  // DELETE /api/projects/:id
  deleteEvent = id => {
    return this.api.delete(`/api/meetups/${id}`);
  };
}
 
// Create one instance object
const eventsService = new EventsService();
 
export default eventsService;