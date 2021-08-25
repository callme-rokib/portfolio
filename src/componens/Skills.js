import { Col, Container, Row, Image } from 'react-bootstrap';
import Laravel from '../assets/image/laravel.png';
import Vue from '../assets/image/vue.png';
import ReactJs from '../assets/image/react.png';
import Sql from '../assets/image/sql.png';

const Skills = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="fw-bold text-center my-grey my-title">Skills</h1>
        </Row>
        <Row className="mx-auto text-center">
          <Col lg={3}>
            <Image src={Laravel} />
          </Col>
          <Col lg={3}>
            <Image src={Vue} />
          </Col>
          <Col lg={3}>
            {' '}
            <Image src={ReactJs} />
          </Col>
          <Col lg={3}>
            {' '}
            <Image src={Sql} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
