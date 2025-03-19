import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotosByQuery = (q, currentPage) => {
  const searchParams = {
    q,
    currentPage,
    key: '49370474-a1716903616cca1a00d36cfab',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  };

  return axios.get(`/api/`, { params: searchParams });
};
