import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './scss/global.scss';


import { Home } from './pages/Home';
import { Restaurant } from './pages/Restaurant';

import ScrollToTop from './utilities/ScrollTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/restaurant">
          <Restaurant />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
