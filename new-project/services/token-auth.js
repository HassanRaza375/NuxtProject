import axios from 'axios';

export default {
  // Sign in and get JWT token
  async signIn(username, password) {
    try {
      const response = await axios.post('/signin/', {
        username: username,
        password: password,
      });

      if (response.data && response.data.access) {
        // Store the JWT token in localStorage or cookies
        localStorage.setItem('access_token', response.data.access);
        return response.data;
      } else {
        throw new Error('Invalid login credentials');
      }
    } catch (error) {
        alert('This is error')
      throw new Error(error.response?.data?.detail || 'Login failed');
    }
  },

  // Get token from localStorage
  getToken() {
    return localStorage.getItem('access_token');
  },

  // Set token in axios header
  setAuthHeader() {
    const token = this.getToken();
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },

  // Logout and remove token from localStorage
  logout() {
    localStorage.removeItem('access_token');
    delete axios.defaults.headers.common['Authorization'];
  },
};