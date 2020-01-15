import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/navbar.compnent';
import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.componet';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
          <Route exact path='/' component={HomePage} /> 
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
