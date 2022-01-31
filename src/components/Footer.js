import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white m-0 p-2">
      <a
        href="https://www.metaweather.com/"
        rel="noreferrer"
        target="_blank"
        className="nav-link d-inline"
      >
        MetaWeather API
      </a>
      <a href="https://github.com/ptakpiotr">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          style={{
            maxWidth: "40px",
          }}
          alt="Github logo"
        />
      </a>
      <a
        href="https://basmilius.github.io/weather-icons/index-fill.html"
        rel="noreferrer"
        target="_blank"
        className="nav-link d-inline"
      >
        Icons by Bas Milius
      </a>
    </footer>
  );
}

export default Footer;
