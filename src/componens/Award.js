import { Container, Row, Col, Card } from 'react-bootstrap';
const Award = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="fw-bold text-center my-grey my-title">Award</h1>
        </Row>
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

export default Award;
