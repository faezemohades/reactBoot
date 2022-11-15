import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import play from "../assets/images/play 64.png";
import "./main.css";
import Loading from "./Loading";

function Main() {
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://mp4.ir/api/newworldcup.json?v=1")
      .then((response) => {
        console.log(response.data);
        setShow(response.data.matches);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container className="my-5 text-light">
          <Row className="d-flex justify-content-center mt-4">
            <Col lg="12" md="10" sm="10" xs="11">
              <h3 >لیست برنامه ها</h3>
            </Col>
          </Row>

          {show &&
            show.map((item, index) => (
              <Row key={index} className="d-flex justify-content-center">
                <Col lg="12" md="10" sm="10" xs="11">
                  <h6 style={{ color: "grey" }} className="mt-5 ">{item.date}</h6>
                  {item.data.map((sub, id) => (
                    <Row key={id} className="d-flex justify-content-center">
                    <Col >
                      <Card className="text-center mt-3 bg-dark">
                        {sub.isplaying ? (
                          <a
                            href={sub.link}
                            style={{
                              textDecoration: "none",
                              color: "white",
                              display: "flex",
                            }}
                          >
                            <Card.Body className=" Card-Body d-flex justify-content-between">
                              {/* right */}
                              <div
                                className="d-flex  align-items-center"
                                style={{ width: "35%" }}
                              >
                                <img
                                  src={`https://mp4.ir/api/flags/${sub.flag1}`}
                                  alt="flag1"
                                  className="logo img-fluid"
                                />
                                <div className="title1">
                                  <span>{sub.title1}</span>
                                </div>
                              </div>
                              {/* center */}
                              <div
                                className="d-flex  flex-column text-center align-items-center justify-content-center"
                                style={{ width: "30%" }}
                              >
                                <p className="py-2">در حال پخش</p>
                                <img
                                  src={play}
                                  alt=""
                                  className="play-logo"
                                  style={{ transform: "translateY(-30%)" }}
                                />
                              </div>
                              {/* left */}
                              <div
                                className="d-flex  align-items-center justify-content-end"
                                style={{ width: "35%" }}
                              >
                                <div className="title2">
                                  <span>{sub.title2}</span>
                                </div>
                                <img
                                  src={`https://mp4.ir/api/flags/${sub.flag2}`}
                                  alt="flag1"
                                  className="logo img-fluid"
                                />
                              </div>
                            </Card.Body>
                          </a>
                        ) : (
                          <Card.Body className="Card-Body d-flex justify-content-between ">
                            {/* right */}
                            <div
                              className="d-flex  align-items-center"
                              style={{ width: "30%" }}
                            >
                              <img
                                src={`https://mp4.ir/api/flags/${sub.flag1}`}
                                alt="flag1"
                                className="logo img-fluid"
                              />
                              <div className="title1">
                                <span>{sub.title1}</span>
                              </div>
                            </div>
                            {/* center */}
                            <div
                              className="d-flex flex-column justify-content-center text-center align-items-center"
                              style={{ width: "30%" }}
                            >
                              <div className="d-flex flex-column justify-content-center mt-3 ">
                                 <p>{sub.time}</p>
                              </div>
                            </div>
                            {/* left */}
                            <div
                              className="d-flex  align-items-center justify-content-end"
                              style={{ width: "30%" }}
                            >
                              <div className="title2">
                                <span>{sub.title2}</span>
                              </div>
                              <img
                                src={`https://mp4.ir/api/flags/${sub.flag2}`}
                                alt="flag1"
                                className="logo img-fluid"
                              />
                            </div>
                          </Card.Body>
                        )}
                      </Card>
                    </Col>
                  </Row>
                  ))}
                </Col>
              </Row>
            ))}
        </Container>
      )}
    </div>
  );
}

export default Main;
