// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Assuming your backend is running on port 5000

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Example API endpoints
// export const getAllImages = () => api.get('/images');
// export const uploadImage = (formData) => api.post('/images/upload', formData);
// export const searchImages = (query) => api.get(/images/search?query=${query});
// // Add more endpoints as needed

// const apis = {
//   getAllImages,
//   uploadImage,
//   searchImages,
//   // Add more API functions here
// };

// export default apis;
import axios from 'axios';

const BACKEND_URL = 'http://localhost:5000'; // Assuming your backend is running on port 5000

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API endpoints
export const getAllImages = () => api.get('/images')
  .catch(error => {
    // Handle error gracefully (e.g., log the error and return default value)
    console.error('Error fetching all images:', error);
    return { data: [] }; // Return an empty array as default value
  });

export const uploadImage = (formData) => {
  // Simulate successful upload (no actual backend request)
  console.log('Image uploaded successfully:', formData);
  return Promise.resolve({ data: { message: 'Image uploaded successfully' } });
};

export const searchImages = (query) => {
  // Simulate successful search (no actual backend request)
  console.log('Searching images with query:', query);
  return Promise.resolve({ data: [] }); // Return an empty array as default value
};

const apis = {
  getAllImages,
  uploadImage,
  searchImages,
  // Add more API functions here
};

export default apis;