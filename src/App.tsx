import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemeProvider from "components/ThemeProvider";

import Background from "components/Background";
import Menu from "components/Menu";
import Bottom from "components/Bottom";

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

          <Bottom />
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
