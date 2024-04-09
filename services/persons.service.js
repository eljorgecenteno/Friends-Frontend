
import axios from 'axios';
 
class PersonsService {
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
  createPerson = requestBody => {
    return this.api.post('/api/persons', requestBody);
  };
 
  // GET /api/projects
  getAllPersons = () => {
    return this.api.get('/api/persons');
  };
 
  // GET /api/projects/:id
  getPerson = id => {
    return this.api.get(`/api/persons/${id}`);
  };
 
  // PUT /api/projects/:id
  updatePerson = (id, requestBody) => {
    return this.api.put(`/api/persons/${id}`, requestBody);
  };
 
  // DELETE /api/projects/:id
  deletePerson = id => {
    return this.api.delete(`/api/persons/${id}`);
  };
}
 
// Create one instance object
const personsService = new PersonsService();
 
export default personsService;