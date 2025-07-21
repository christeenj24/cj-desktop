import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';
import Work from "./sections/Work/Work.jsx";
import Links from './sections/Links/Links.jsx';
import Contact from './sections/Contact/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename="/cj-desktop/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/skills" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);