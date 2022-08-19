import { React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center style={{ height: "336px" }}>
                    <div className="flip-card" class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src="https://user-images.githubusercontent.com/87421852/150777740-d1ef5d91-9ea8-449f-9b84-7f5d6c924445.png"
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              -Clone Of Twitter-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p align="center">Features</p>
                                <tr>
                                  Posting tweet with upload image from files.
                                </tr>
                                <tr>Real time chat using websocket.</tr>
                                <tr>
                                  Added emoji for post and also like
                                  functionality.
                                </tr>
                                <tr>
                                  Various filter functionalities for explore
                                  page.
                                </tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <br />
                  <div>
                    <a
                      href="https://twitter-rho-inky.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/madhuri7patel/twitter-frontend-main"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src="https://camo.githubusercontent.com/ec45a6950330566962feba6a37aed1ef2041362b7cb6d11658e838062024b5e6/68747470733a2f2f692e706f7374696d672e63632f48735634533264632f53637265656e73686f742d392e706e67"
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              -Clone of Indian Exprees-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p align="center">Features</p>
                                <tr>
                                  Sign-in/Sign-up page with OTP verification
                                </tr>
                                <tr>
                                  Categorization of products with carousel
                                  effect
                                </tr>
                                <tr>Various filter functionalities.</tr>
                                <tr>News page with Pincode verification.</tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <br />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    {/* <Modal show={show} onHide={handleClose} className="modal">
                                <Modal.Body></Modal.Body>
                                <Modal.Footer>
                                <Button variant="outline-dark" onClick={handleClose}>
                                    Close
                                </Button>
                                <a href="" target="_blank" rel="noreferrer noopener">
                                    <Button variant="outline-dark">View Github Repo</Button>
                                </a>
                                </Modal.Footer>
                            </Modal> */}

                    {/* <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button> */}

                    <a
                      href="https://github.com/madhuri7patel/indianExpress-master"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>

                    <a
                      href="https://indianexpressclone.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img
                            variant="top"
                            src="https://user-images.githubusercontent.com/87421852/148261814-824f2abc-c591-4c58-bae8-d5e4c0d365c3.png"
                          />
                          <Card.Body>
                            <Card.Title align="center">
                              -Clone of Healthmug-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p align="center">Features</p>
                                <tr>Landing page with CSS effects.</tr>
                                <tr>Product page with sorting.</tr>
                                <tr>Add to the cart page and checkout page.</tr>
                                <tr>contact-us and review page..</tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://github.com/madhuri7patel/Healthmug-final.github.io-main"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://vermillion-cocada-8199ef.netlify.app"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}></Col>
              <Col lg={4} sm={12}></Col>
              <Col lg={4} sm={12}></Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
    </div>
  );
};

export default Experience;
