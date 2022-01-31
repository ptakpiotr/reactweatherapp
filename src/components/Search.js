import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Intro from "./Intro";

function Search({ setCity, setSrc }) {
  const [city, setLocalCity] = useState("");

  const handleChange = (e) => {
    setLocalCity(e.target.value);
  };

  const handleClick = () => {
    setCity(city);
    setLocalCity("");
    setSrc(false);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      setCity(city);
      setLocalCity("");
      setSrc(false);
    }
  };

  return (
    <div className="p-5 mt-5">
      <center>
        <Intro />
        <Row>
          <Col sm={4} className="mx-auto">
            <input
              type="text"
              placeholder="Type city name"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={city}
              className="form-control"
              style={{
                maxWidth: "400px",
              }}
            />
          </Col>
          <Col sm={6} className="mx-auto">
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-success"
            >
              Search city
            </button>
          </Col>
        </Row>
      </center>
    </div>
  );
}

export default Search;
