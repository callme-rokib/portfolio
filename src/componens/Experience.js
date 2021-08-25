import { Container, Row, Card, ListGroup, Col } from 'react-bootstrap';

function Experience() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="fw-bold text-center my-grey my-title">Experience</h1>
        </Row>
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
}

export default Experience;
