import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './views/Auth';
import Error from './views/Error';
import Home from './views/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}
