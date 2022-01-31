import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import dateFormat from "dateformat";

const StyledDiv = styled.div`
  display: inline-block;
  max-width: 420px;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 20px;
  margin: 35px;
  -webkit-box-shadow: 2px 3px 72px -20px rgba(66, 68, 90, 1);
  -moz-box-shadow: 2px 3px 72px -20px rgba(66, 68, 90, 1);
  box-shadow: 2px 3px 72px -20px rgba(66, 68, 90, 1);
  &:hover {
    transform: scale(1.03);
    background-color: white;
    box-shadow: none;
  }
`;

function Tile({ wh, iconUrl }) {
  return (
    <StyledDiv className="container">
      <img
        src={`${iconUrl}${wh.weather_state_abbr}.svg`}
        alt={wh.weather_state_name}
        style={{
          maxWidth: "100px",
        }}
      />
      <Row className="mt-1">
        <Col sm={12}>{dateFormat(wh.applicable_date, "mediumDate")}</Col>
      </Row>
      <Row className="p-1">
        <Col sm={6}>
          <h3>{Math.round(wh.the_temp)} &deg; C</h3>{" "}
        </Col>
        <Col sm={6}>
          <p className="less-important">{Math.round(wh.min_temp)} &deg; C</p>
        </Col>
      </Row>
      <Row>
        <p className="text-secondary">
          {wh.weather_state_name}{" "}
          <strong>
            {Math.round(wh.air_pressure)}{" "}
            <img
              src="https://basmilius.github.io/weather-icons/production/fill/all/barometer.svg"
              style={{ maxWidth: "50px" }}
              alt="Barometer"
            />
          </strong>
        </p>
      </Row>
    </StyledDiv>
  );
}

export default Tile;
