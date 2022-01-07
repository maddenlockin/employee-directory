import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}
