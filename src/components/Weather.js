import React, { useState, useEffect } from "react";
import axios from "axios";
import Tile from "./Tile";
import { Row, Col } from "react-bootstrap";

const corsProxy = "";
function Weather({ city, setCity }) {
  const [cityId, setCityId] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [rateLimiter, setRateLimiter] = useState(false);
  const [iconUrl, setIconUrl] = useState(
    "https://www.metaweather.com/static/img/weather/"
  );
  const [baseLocURL, setBaseLocURL] = useState(
    "metaweather.com/api/location/search/"
  );
  const [baseWeatherURL, setBaseWeatherURL] = useState(
    "metaweather.com/api/location/"
  );
  const [weatherStates, setWeatherStates] = useState([]);

  useEffect(() => {
    if (city.length > 1) {
      setLoading((prev) => !prev);
      axios
        .get(`${corsProxy}${baseLocURL}?query=${city}`, {
          headers: {
            contentType: "application/json",
          },
        })
        .then((resp) => {
          let woeid = resp?.data[0]?.woeid;
          if (woeid == null) {
            alert(
              "City with the given name does not have records in our system"
            );
            setCityId(-1);
          }
          setCityId(woeid);
        });
    }
  }, [city]);

  useEffect(() => {
    if (cityId > -1) {
      axios
        .get(`${corsProxy}${baseWeatherURL}${cityId}`)
        .then((dt) => {
          const {
            data: { consolidated_weather },
          } = dt;
          setWeatherStates(consolidated_weather);
          setLoading((prev) => !prev);
        })
        .catch((err) => {
          console.log(err);
          if (err.statusCode === 429) {
            setRateLimiter((prev) => !prev);
          }
        });
    }
  }, [cityId]);
  return (
    <>
      {rateLimiter && (
        <div>
          <img
            src="https://basmilius.github.io/weather-icons/production/fill/all/snowflake.svg"
            alt="rateLimiter_error"
            style={{
              maxWidth: "500px",
            }}
          />
          Please wait because you exceeded maximum calls...
        </div>
      )}
      {loading ? (
        <div>
          <img
            src="https://basmilius.github.io/weather-icons/production/fill/all/dust-wind.svg"
            alt="loading"
            style={{
              maxWidth: "500px",
            }}
          />
        </div>
      ) : (
        <Row>
          {weatherStates.map((wh) => {
            return (
              <Col md={4}>
                <Tile key={wh.id} wh={wh} iconUrl={iconUrl} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
}

export default Weather;
