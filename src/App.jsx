import { useState } from "react";
import "./App.css";
import Landing from "./sections/Landing";
import Menu from "./sections/Menu";
import Navbar from "./components/Navbar";
import Map from "./sections/Map";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Ratings from "./sections/Ratings";
import LanguageChanger from "./components/LanguageChanger";

function App() {
  return (
    <section className="app_wrapper">
      <LanguageChanger />

      <Navbar />
      <section className="perspective_wrapper">
        <Landing />
      </section>

      <section className="wrapper_mid">
        <section className="perspective_wrapper">
          <Menu />
        </section>

        <section className="perspective_wrapper" id="Lokalizacja">
          <Map />
        </section>

        <section className="perspective_wrapper" id="O Naszej Restauracji">
          <About />
        </section>

        <section
          className="perspective_wrapper"
          id="Opinie"
          style={{ height: "450px" }}
        >
          <Ratings />
        </section>
      </section>

      <section style={{ height: "100px" }}></section>
      <Footer />
    </section>
  );
}

export default App;
