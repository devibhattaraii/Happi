import { Col, Container, Row } from 'react-bootstrap';

import './Conditions.css';

const Conditions = () => {
  return (
    <>
      <Container fluid="md">
        <p className="conditions-topic">Learn more about your Condition</p>
        <Row noGutters style={{ marginTop: 50, marginBottom: 50 }}>
          <Col lg={3} md={4} xs={6}>
            <div className="depression-image" />
            <p className="condition-title">Depression</p>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="anxiety-image" />
            <p className="condition-title">Anxiety</p>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="ptsd-image" />
            <p className="condition-title">Post-Traumatic Stress Disorder</p>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="ocd-image" />
            <p className="condition-title">Obsessive Compulsive Disorder</p>
          </Col>
        </Row>
        <Row noGutters>
          <Col lg={3} md={4} xs={6}>
            <div className="panic-attack-image" />
            <p className="condition-title">Panic Attacks</p>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="bipolar-image" />
            <p className="condition-title">Bi-Polar Disorder</p>
          </Col>
          <Col lg={3} md={4} xs={6}>
            <div className="eating-disorder-image" />
            <p className="condition-title">Eating Disorder</p>
          </Col>
          <Col lg={3} md={4} xs={6}>
            {/* <div className="condition-image" /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Conditions;
