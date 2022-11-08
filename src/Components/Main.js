import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import play from "../assets/images/64.png";
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
        <section>
          {show.map((item, index) => (
            <Row key={index} className="d-flex justify-content-center">
              <Col lg="10">
                <Card className="text-center mt-3 bg-dark">
                  <div className="d-flex justify-content-center text-center ">
                    {item.isplaying ? (
                      <Card.Title className="mt-3 w-50">در حال پخش </Card.Title>
                    ) : (
                      <Card.Title className="mt-3 ">{item.date}</Card.Title>
                    )}
                  </div>

                  <Card.Body className="d-flex justify-content-between">
                    <div className="d-flex  align-items-center">
                      <img
                        src={`https://mp4.ir/api/flags/${item.flag1}`}
                        alt=""
                        className="logo img-fluid"
                      />
                      <h6 className="text">{item.title1}</h6>
                    </div>
                    <div className="d-flex align-items-center ">
                      {item.isplaying ? (
                        <a href={item.link}>
                          <img src={play} alt="" className="logo" />
                        </a>
                      ) : (
                        <p className="text">{item.time}</p>
                      )}
                    </div>
                    <div className="d-flex align-items-center ">
                      <h6 className="text">{item.title2}</h6>
                      <img
                        src={`https://mp4.ir/api/flags/${item.flag2}`}
                        alt=""
                        className="logo"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </section>
      </Container>
    </>
  );
}

export default Main;
