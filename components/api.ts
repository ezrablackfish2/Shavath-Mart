// api.ts
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/upload'; // Replace with your API URL

export const uploadData = async (formData: FormData) => {
  try {
    const response = await axios.post(apiUrl, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

