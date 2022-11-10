import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import play from "../assets/images/play 64.png";
import "./main.css";

function Main() {
  const [show, setShow] = useState([]);

  const loadUsers =   () => {
      axios
      .get("https://mp4.ir/api/getworldcup")
      .then((response) => {
        console.log(response);
        setShow(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);
 

  return (
    <>
      <Container className="mt-5 text-light">
        <Row className="d-flex justify-content-center">
          <Col lg="10">
            <h3> لیست برنامه ها</h3>
          </Col>
        </Row>
        {show.map((item, index) => (
          <Row key={index} className="d-flex justify-content-center">
            <Col lg="10" style={{ height: "160px" }}>
              <Card className="text-center mt-3  bg-dark">
                <Card.Body className="d-flex justify-content-between">
                  {/* right */}
                  {item.isplaying ? (
                    <div className="d-flex  align-items-center">
                      <a
                        href={item.link}
                        style={{
                          textDecoration: "none",
                          color: "white",
                          display: "flex",
                        }}
                      >
                        <img
                          src={`https://mp4.ir/api/flags/${item.flag1}`}
                          alt="flag1"
                          className="logo img-fluid"
                        />
                        <div
                          style={{
                            width: "70px",
                            textAlign: "right",
                            marginRight: "10px",
                          }}
                        >
                          <span>{item.title1}</span>
                        </div>
                      </a>
                    </div>
                  ) : (
                    <div className="d-flex  align-items-center">
                      <img
                        src={`https://mp4.ir/api/flags/${item.flag1}`}
                        alt="flag1"
                        className="logo img-fluid"
                      />
                      <div
                        style={{
                          width: "70px",
                          textAlign: "right",
                          marginRight: "10px",
                        }}
                      >
                        <span>{item.title1}</span>
                      </div>
                    </div>
                  )}
                  {/* center */}
                  <div className="d-flex justify-content-center text-center">
                    {item.isplaying ? (
                      <a
                        href={item.link}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <div style={{ width: "20vw" }}>
                          <p className="mt-3 ">در حال پخش</p>
                          <img src={play} alt="" className="logo" />
                        </div>
                      </a>
                    ) : (
                      <div style={{ width: "20vw" }}>
                        <p className="mt-3">{item.date}</p>
                        <p className=" mt-3 ">{item.time}</p>
                      </div>
                    )}
                  </div>
                  {/* left */}
                  {item.isplaying ? (
                    <div className="d-flex  align-items-center">
                      <a
                        href={item.link}
                        style={{
                          textDecoration: "none",
                          color: "white",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            width: "70px",
                            textAlign: "left",
                            marginLeft: "10px",
                          }}
                        >
                          <span>{item.title2}</span>
                        </div>
                        <img
                          src={`https://mp4.ir/api/flags/${item.flag2}`}
                          alt="flag1"
                          className="logo img-fluid"
                        />
                      </a>
                    </div>
                  ) : (
                    <div className="d-flex  align-items-center">
                      <div
                        style={{
                          width: "70px",
                          textAlign: "l",
                          marginLeft: "10px",
                        }}
                      >
                        <span>{item.title2}</span>
                      </div>
                      <img
                        src={`https://mp4.ir/api/flags/${item.flag2}`}
                        alt="flag1"
                        className="logo img-fluid"
                      />
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Main;
