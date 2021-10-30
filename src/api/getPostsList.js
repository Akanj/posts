import axios from 'axios';

const getPostsList = () => {
  return axios
  .get('https://jsonplaceholder.typicode.com/posts').then((res) => res.data);
};

export default getPostsList;
