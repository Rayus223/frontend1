const CONFIG = {
  development: {
    API_URL: 'http://localhost:5000'
  },
  production: {
    API_URL: 'https://api.dearsirhometuition.com'
  }
};

// Determine environment based on hostname
const getEnvironment = () => {
  return window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1' 
    ? 'development' 
    : 'production';
};

// Export the API URL based on environment
const API_BASE_URL = CONFIG[getEnvironment()].API_URL;

// For debugging
console.log('Current API URL:', API_BASE_URL); 