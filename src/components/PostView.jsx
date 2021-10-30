// import {useParams} from "react-router-dom";

import {Container, Row, Col, Image} from 'react-bootstrap';

import Post from '../mocks/_post.json';
import NotFound from './NotFound';

const PostView = () => {

  /* should have a rerender then views increase twice */
  const views = localStorage.getItem('viewNb');
  const currentViews = localStorage.setItem('viewNb', (parseInt(views) + 1));
  /* param used to request data from API*/
  // const {id} = useParams();

  /*
   This const will be replaced by API call status
   */
  const isUndefined = typeof Post === 'undefined';
  const quotaReached = views >= 6;

  return (
    <>
      {isUndefined || quotaReached ? (
        <NotFound/>
      ) : (
        <Container fluid className="justify-content-md-center">
          <Row>
            <Col xs={12}>
              <h1>{Post?.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <Image src="https://via.placeholder.com/300/92c952" alt="" fluid/>
            </Col>
            <Col xs={12} sm={6}>
              <p>{Post?.body}</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );

};

export default PostView;
