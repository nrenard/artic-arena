import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemeProvider from "components/ThemeProvider";

import Background from "templates/Background";
import Menu from "templates/Menu";

import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Background>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
