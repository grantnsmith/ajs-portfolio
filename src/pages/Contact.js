import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import ContactContainer from "../components/ContactContainer";
import ContactFooter from "../components/ContactFooter";

function Contact() {
  return (
    <div>
      <Navbar />
      <Container>
        <ContactContainer />
      </Container>
      <ContactFooter />
    </div>
  );
}

export default Contact;
