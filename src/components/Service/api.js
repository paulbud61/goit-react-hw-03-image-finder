import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = '41016865-02fd718b199a27c2836930091';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  try {
    const response = await axios.get('/', {
      params: {
        q: query,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    toast.error('Error getting images:', error);
    throw error;
  }
};
