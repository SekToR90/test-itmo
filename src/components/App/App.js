import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import  MainAuthorization  from '../MainAuthorization/MainAuthorization'
import Page from '../Page/Page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainAuthorization />
        </Route>

        <ProtectedRoute path="/page-1" component={Page} title={'Page_1'}/>
        <ProtectedRoute path="/page-2" component={Page} title={'Page_2'}/>
        <ProtectedRoute path="/page-3" component={Page} title={'Page_3'}/>
        
      </Switch>
    </div>
  );
}

export default App;
