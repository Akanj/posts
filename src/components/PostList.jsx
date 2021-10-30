import {NavLink} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';

import PostsList from '../mocks/_posts.json';

const PostList = () => {
  console.log(PostsList);
  return (
    <Container>
      {PostsList && (
        <ul>
          {PostsList.map((postItem) => {
            <li>
              <Row>
                <NavLink to={`/post/${postItem.id}`}>Voir plus</NavLink>
              </Row>
            </li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default PostList;
