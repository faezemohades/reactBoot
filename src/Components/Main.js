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
          <Row className="d-flex justify-content-center mb-4">
            <Col lg="10" md="10" sm="10" xs="11">
              <h3>لیست برنامه ها</h3>
            </Col>
          </Row>

          {show &&
            show.map((item, index) => (
              <Row key={index} className="d-flex justify-content-center">
                <Col lg="10" md="10" sm="10" xs="11">
                  <h4 style={{ color: "grey" }}>{item.date}</h4>
                  {item.data.map((sub, id) => (
                    <div key={id}>
                      <h5>{sub.title1}</h5>
                      <h5>{sub.title2}</h5>
                    </div>
                  ))}
                  <hr />
                </Col>
              </Row>
            ))}
        </Container>
      )}
    </div>
  );
}

export default Main;
