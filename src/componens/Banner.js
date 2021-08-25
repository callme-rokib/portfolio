import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Me from '../assets/image/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Banner = () => {
  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-around my-banner pt-lg-5 pb-lg-5">
          <Col lg="4">
            <p className="my-title-banner">
              Hello I'm <br />
              <span>ROKIB</span>
              <br />
              FULL STACK DEVELOPER
              <hr />
            </p>
            <p className="my-subtitle-banner">
              Full Stack Developer from Pandeglang, Indonesia. I always give the
              best effort for each projects I did. I give a solution with my
              creative app.
            </p>
          </Col>
          <Col lg="4" className="d-flex align-items-center">
            <Card className="my-right-banner">
              <b className="text-center">
                <FontAwesomeIcon
                  icon="phone-volume"
                  className="fs-3 my-aqua me-xl-1 m-2 my-transform-45"
                />
              </b>
              <span className="my-font-12">087772343332</span>
            </Card>
            <Image height="250" width="350" className="my-card" src={Me} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
