import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import ServicesContainer from "../components/ServicesContainer";
import ResumeFooter from "../components/ResumeFooter";

function Services() {
  return (
    <div>
      <Navbar />
      <Container>
        <ServicesContainer />
      </Container>
      <ResumeFooter />
    </div>
  );
}

export default Services;
