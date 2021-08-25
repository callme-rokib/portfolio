import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import ImageExperience from '../assets/image/experience.jpeg';
import { Parallax } from 'react-parallax';

const Experiences = () => {
  return (
    <>
      <Parallax bgImage={ImageExperience}>
        <div style={{ height: '200px' }} />
        <h1 className="display-4 text-center text-white fw-bold">EXPERIENCE</h1>
      </Parallax>

      <Container className="mt-lg-3">
        <Row className="mx-auto text-center justify-content-around">
          <Col lg={12}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3 className="fw-bold">2016 - 2017</h3>
                </ListGroup.Item>
                <ListGroup.Item className="fw-bold">
                  PT. Sari Asih Aria Cemerlang
                </ListGroup.Item>
                <ListGroup.Item>As IT Support</ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3 className="fw-bold">2017 - Now</h3>
                </ListGroup.Item>
                <ListGroup.Item className="fw-bold">
                  PT. Astra Infra Toll Road
                </ListGroup.Item>
                <ListGroup.Item>As System Development</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experiences;
