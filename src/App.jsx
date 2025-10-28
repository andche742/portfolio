import { Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Analytics/>
    </>
  );
}