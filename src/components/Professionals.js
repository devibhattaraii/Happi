import { Row, Col, Container } from 'react-bootstrap';

import './Professionals.css';

const Professionals = () => {
  return (
    <Container fluid style={{ backgroundColor: '#FFE3FE' }}>
      <Container
        fluid="md"
        style={{ paddingTop: 70, backgroundColor: '#FFE3FE' }}
      >
        <p className="professionals-topic">Professionals</p>
        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col lg={2} md={4} xs={6}>
            <div className="adams-image" />
            <p className="condition-title">Dr. Adams</p>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <div className="march-image" />
            <p className="condition-title">Dr. March</p>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <div className="cara-image" />
            <p className="condition-title">Dr. Cara</p>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <div className="evans-image" />
            <p className="condition-title">Dr. Evans</p>
          </Col>
          <Col lg={2} md={4} xs={6}>
            <div className="freeman-image" />
            <p className="condition-title">Dr. Freeman</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Professionals;
