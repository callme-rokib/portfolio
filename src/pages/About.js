import { Container } from 'react-bootstrap';
import ImageAbout from '../assets/image/about.jpeg';
import { Parallax } from 'react-parallax';

const About = () => {
  return (
    <>
      <Parallax bgImage={ImageAbout}>
        <div style={{ height: '200px' }} />
        <h1 className="display-4 text-center text-white fw-bold">ABOUT ME</h1>
      </Parallax>

      <Container>
        <div className="jumbotron">
          <p className="lead mt-lg-3">
            <dl className="row">
              <dt className="col-sm-2">Name</dt>
              <dd className="col-sm-10">ROKIB</dd>

              <dt className="col-sm-2">Date of birth</dt>
              <dd className="col-sm-10">April 25th 1991</dd>

              <dt className="col-sm-2">Phone</dt>
              <dd className="col-sm-10">+62 8777-234-3332</dd>

              <dt className="col-sm-2">Email</dt>
              <dd className="col-sm-10">callme.rokib@gmail.com</dd>

              <dt className="col-sm-2">Address</dt>
              <dd className="col-sm-10">Pandeglang - Banten, Indonesia</dd>
            </dl>
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
