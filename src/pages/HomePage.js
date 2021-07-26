import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import ResumeContainer from "../components/ResumeContainer";
import ResumeFooter from "../components/ResumeFooter";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <ResumeContainer />
      </Container>
      <ResumeFooter />
    </div>
  );
}

export default HomePage;
