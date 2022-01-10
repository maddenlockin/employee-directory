import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Auth from './views/Auth';
import Error from './views/Error';
import Home from './views/Home';
import Profile from './views/Profile';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
