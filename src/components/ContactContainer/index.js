import React from "react";
import "./style.css";

function ContactContainer(props) {
  return (
    <div className="container">
      <h1 className="resume-header">Contact Us</h1>
      <hr></hr>
      <div>
        <div className="row">
          <div className="col-auto col- mx-auto">
            <div className="resume-block">
              {/* <img
                src={"images/fill-murray-300x300.jpg"}
                className="align-self-start mr-3 rounded resume-image"
                alt="filler"
              /> */}
            </div>
          </div>
          <div className="col-auto col-sm mx-auto">
            <div className="resume-body">
              {/* <h5 className="mt-0 mb-1 resume-title">Email</h5> */}
              <p className="resume-text-body">
                Poke raw denim lorem, tumblr you probably haven't heard of them
                shabby chic scenester squid beard tattooed intelligentsia dolore
                pop-up. Poke raw denim lorem, tumblr you probably haven't heard
                of them shabby chic scenester squid beard tattooed
                intelligentsia dolore pop-up.
                <br />
                <br />
                <a
                  // NEED TO INPUT CORRECT INFORMATION HERE
                  href="mailto:grantnsmith@gmail.com?Subject=Requesting%20More%20Information"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact-btn animate__animated animate__fadeInRight"
                >
                  <i className="far fa-envelope"></i> Email Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
