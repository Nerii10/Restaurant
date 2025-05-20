import { useState } from "react";
import "./App.css";
import Landing from "./sections/Landing";
import Menu from "./sections/Menu";
import Navbar from "./components/Navbar";
import Map from "./sections/Map";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Ratings from "./sections/Ratings";

function App() {
  return (
    <section className="app_wrapper">
      <Navbar />
      <section className="perspective_wrapper">
        <Landing />
      </section>

      <section className="wrapper_mid">
        <section className="perspective_wrapper">
          <Menu />
        </section>

        <section className="perspective_wrapper">
          <Map />
        </section>

        <section className="perspective_wrapper">
          <About />
        </section>

        <section className="perspective_wrapper">
          <Ratings />
        </section>
      </section>

      <section style={{height:'400px'}}></section>
      <Footer />
    </section>
  );
}

export default App;
