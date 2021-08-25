import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageAward from '../assets/image/Awards.jpg';
import { Parallax } from 'react-parallax';

const Awards = () => {
  return (
    <>
      <Parallax bgImage={ImageAward}>
        <div style={{ height: '200px' }} />
        <h1 className="display-4 text-center text-white fw-bold">AWARD</h1>
      </Parallax>

      <Container className="mt-lg-3">
        <Row className="mx-auto text-center justify-content-around">
          <Col lg={12}>
            <Card bg="secondary" className="mb-5 text-white">
              <Card.Body>
                <Card.Text className="my-font-24 my-p-t-63">
                  Finalist, Banten Province Innovation Creation Competition
                </Card.Text>
                <Card.Text className="my-font-24 my-p-b-63">
                  2nd Place, Inov Astra Group Category
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Awards;
