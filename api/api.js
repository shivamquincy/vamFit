import axios from 'axios';

const API_BASE_URL = 'https://api.edamam.com/api/food-database/v2/parser';
const APP_ID = '6a5c36c2';
const APP_KEY = '616470f234fde23bd62a81c9252c4f0e';

export const searchFood = async (query) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ingr: query,
        app_id: APP_ID,
        app_key: APP_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching for food:', error);
    throw error;
  }
};
