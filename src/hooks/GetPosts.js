import { useQuery } from 'react-query';
import getPostsList from '../api/getPostsList';

const GetPosts = () =>
  useQuery(['posts'], getPostsList ,{
    refetchOnWindowFocus: false,
  });

export default GetPosts;
