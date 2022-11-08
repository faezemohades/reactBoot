import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import play from "../assets/images/play 64.png";
import "./main.css";

function Main() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios.get("https://mp4.ir/api/worldcup2022.json?v=1").then((response) => {
      console.log(response);
      setShow(response.data);
    });
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
                  <div className="d-flex  align-items-center">
                    <img
                      src={`https://mp4.ir/api/flags/${item.flag1}`}
                      alt="flag1"
                      className="logo img-fluid"
                    />
                    <div style={{ width: "70px" }}>
                      <h6>{item.title1}</h6>
                    </div>
                  </div>
                  {/* center */}
                  <div className="d-flex justify-content-center text-center">
                    {item.isplaying ? (
                      <div style={{ width: "20vw" }}>
                        <p className="mt-3 ">در حال پخش</p>
                        <a href={item.link}>
                          <img src={play} alt="" className="logo" />
                        </a>
                      </div>
                    ) : (
                      <div style={{ width: "20vw" }}>
                        <p className="mt-3">{item.date}</p>
                        <p className=" mt-3 ">{item.time}</p>
                      </div>
                    )}
                  </div>
                  {/* left */}
                  <div className="d-flex align-items-center ">
                    <div style={{ width: "70px" }}>
                      <h6 >{item.title2}</h6>
                    </div>
                    <img
                      src={`https://mp4.ir/api/flags/${item.flag2}`}
                      alt="flag2"
                      className="logo"
                    />
                  </div>
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
