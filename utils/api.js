import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  return axios.post(`${BASE_URL}/posts`, formData);
};

export default uploadImage;

