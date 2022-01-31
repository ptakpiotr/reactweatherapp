import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  const [searchshow, setSearchShow] = useState(true);
  const [city, setCity] = useState("");
  const [logoURL, setLogoURL] = useState(
    "https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-day-snow.svg"
  );
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Navbar logourl={logoURL} setSrc={setSearchShow} />
        <main>
          {searchshow ? (
            <Search city={city} setCity={setCity} setSrc={setSearchShow} />
          ) : (
            <Weather city={city} setCity={setCity} />
          )}
        </main>
        <Footer />
      </DndProvider>
    </>
  );
}

export default App;
