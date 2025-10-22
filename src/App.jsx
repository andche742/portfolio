import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
  );
}