import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./common/Navigation";
import Home from "./features/Home";
import About from "./features/About";
import Portfolio from "./features/Portfolio";
import Contact from "./features/Contact";
import Themes from "./common/Themes";
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Themes/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
