import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
}
