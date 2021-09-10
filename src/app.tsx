import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;