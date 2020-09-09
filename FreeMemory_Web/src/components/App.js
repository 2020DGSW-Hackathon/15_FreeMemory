import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'containers/Login/LoginContainer';
import Register from 'containers/Register/RegisterContainer';
import Schedule from 'components/Schedule';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/" component={Schedule} />
      </Switch>
    </>
  );
}

export default App; 
