import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import play from "../assets/images/play 64.png";
import "./main.css";

function Main() {
  const [show, setShow] = useState([]);

  const loadUsers = () => {
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
      <Container className="mt-5 text-light mb-4" >
        <Row className="d-flex justify-content-center">
          <Col lg="10">
            <h3> لیست برنامه ها</h3>
          </Col>
        </Row>
        {show.map((item, index) => (
          <Row key={index} className="d-flex justify-content-center">
            <Col lg="10">
              <Card className="text-center mt-3  bg-dark">
                {item.isplaying ? (
                  <a
                    href={item.link}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      display: "flex",
                    }}
                  >
                    <Card.Body className=" Card-Body d-flex justify-content-around"  >
                      {/* right */}
                      <div className="d-flex  align-items-center" style={{ width:"35%"}}>
                        <img
                          src={`https://mp4.ir/api/flags/${item.flag1}`}
                          alt="flag1"
                          className="logo img-fluid"
                        />
                        <div
                          style={{
                            textAlign: "right",
                            marginRight: "10px",
                          }}
                        >
                          <span>{item.title1}</span>
                        </div>
                      </div>
                      {/* center */}
                      <div className="d-flex  flex-column text-center align-items-center justify-content-center" style={{ width:"30%" }}>
                             <p  >در حال پخش</p>
                            <img src={play} alt="" className="play-logo" style={{transform: "translateY(-20%)"}}  />
                           </div>
                      {/* left */}
                      <div className="d-flex  align-items-center justify-content-end" style={{ width:"35%"}}>
                        <div
                          style={{
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
                    </Card.Body>
                  </a>
                ) : (
                  <Card.Body className="d-flex justify-content-between Card-Body">
                    {/* right */}
                    <div className="d-flex  align-items-center" style={{ width:"30%"}}>
                      <img
                        src={`https://mp4.ir/api/flags/${item.flag1}`}
                        alt="flag1"
                        className="logo img-fluid"
                      />
                      <div
                        style={{
                          textAlign: "right",
                          marginRight: "10px",
                        }}
                      >
                        <span>{item.title1}</span>
                      </div>
                    </div>
                    {/* center */}
                    <div className="d-flex flex-column justify-content-center text-center align-items-center" style={{ width:"30%"}}>
                      
                           <p >{item.date}</p>
                          <p >{item.time}</p>
                      </div>
                    {/* left */}
                    <div className="d-flex  align-items-center justify-content-end" style={{ width:"30%"}}>
                      <div
                        style={{
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
                  </Card.Body>
                )}
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Main;