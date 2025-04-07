import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Facbook from "../IMG/facebook.png";
import Twitter from "../IMG/twitter.png";
import Reddit from "../IMG/reddit.png";



function Community() {
  return (
    <div className="PageBackground">
     <div className="styled-about">
        <h1 className="community-heading">Join Our Community</h1>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Facbook} roundedCircle />
        </Col>
          <Col xs={6} md={4}>
          <Image src={Reddit} roundedCircle />
        </Col>
          <Col xs={6} md={4}>
          <Image src={Twitter} roundedCircle />
        </Col>
        </Row>
    </Container>
      </div>
    </div>
  );
}
export default Community;