import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import { MainAuthorization } from '../MainAuthorization/MainAuthorization'
import Page from '../Page/Page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainAuthorization />
        </Route>

        <ProtectedRoute path="/page-1" component={Page} />
        
      </Switch>
    </div>
  );
}

export default App;
