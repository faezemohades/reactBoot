import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";

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
      <Container className="mt-5 text-light  ">
        <Row>
          <Col>
            <h3> لیست برنامه ها</h3>
          </Col>
        </Row>
        <section>
          {show.map((item, index) => (
            <Row key={index}>
              <Col xs lg="8">
                <Card className="text-center mt-3 bg-dark  ">
                  <Card.Title className="mt-3 ">{item.date}</Card.Title>
                  <Card.Body className="d-flex justify-content-between ">
                    <div className="d-flex  ">
                      <img
                        src={`https://mp4.ir/api/flags/${item.flag2}`}
                        alt=""
                        className="logo"
                      />
                      <Card.Text>{item.title1}</Card.Text>
                    </div>
                    <div className="d-flex ">
                      <Card.Text className="">{item.time}</Card.Text>
                      <img src="../assets/images/64.png" alt="" />
                    </div>
                    <div className="d-flex  ">
                      <Card.Text>{item.title2}</Card.Text>
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
