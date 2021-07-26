import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import HomePageContainer from "../components/HomePageContainer";
import ResumeFooter from "../components/ResumeFooter";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <HomePageContainer />
      </Container>
      <ResumeFooter />
    </div>
  );
}

export default HomePage;
