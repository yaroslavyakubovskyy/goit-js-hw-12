import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotosByQuery = q => {
  const searchParams = {
    q,
    key: '49370474-a1716903616cca1a00d36cfab',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(`/api/`, { params: searchParams });
};
