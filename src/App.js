import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to Test Site</p> <h1>HOME</h1>
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to Test Site</p> <h1>SERVICES</h1>
      </section>
    </>
  );
};
const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to Test Site</p> <h1>ABOUT</h1>
      </section>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to Test Site</p> <h1>CONTACT</h1>
      </section>
    </>
  );
};
const Error = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>URL NOT FOUND</p> <h1>404</h1>
      </section>
    </>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
