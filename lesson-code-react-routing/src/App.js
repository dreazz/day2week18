import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FirstPageView from './views/FirstPage';
import SecondPageView from './views/SecondPage';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <span>
            <Link to='/'>Home</Link>
          </span>
          <span>
            <Link to='/second/jose'>Jose's Profile</Link>
          </span>
          <span>
            <Link to='/second/santi'>Santi's Profile</Link>
          </span>
        </nav>
        <Switch>
          {/*Example of difference between exact and switch, take switch out and uncomment the route */}
          {/* <Route path='/second/jose' exact component={NotFound} /> */}
          <Route path='/second/:name' exact component={SecondPageView} />
          <Route path='/' exact component={FirstPageView} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
