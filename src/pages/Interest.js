import { Col, Container, Row } from 'react-bootstrap';
import ImageInterest from '../assets/image/laptop.jpg';
import { Parallax } from 'react-parallax';

const Interest = () => {
  return (
    <>
      <Parallax bgImage={ImageInterest}>
        <div style={{ height: '200px' }} />
        <h1 className="display-4 text-center fw-bold">INTEREST</h1>
      </Parallax>

      <Container className="mt-lg-3">
        <Row className="g-5">
          <Col md={6}>
            <h2>BACK-END DEVELOPER</h2>
            <p>
              I always renew my abilities, so that I can develop. Some back-end
              programming languages ​​that I'm currently learning and have
              learned are :
            </p>
            <ul class="icon-list">
              <li>PHP</li>
              <li>PHYTON</li>
              <li>JAVASCRIPT</li>
              <li>VB.Net</li>
            </ul>
          </Col>
          <Col md={6}>
            <h2>FRONT-END DEVELOPER</h2>
            <p>
              so that I have the ability as a front end, there are several
              front-ends that I have learned:
            </p>
            <ul class="icon-list">
              <li>VUE.js</li>
              <li>React.js</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Interest;
