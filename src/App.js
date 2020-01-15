import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/navbar.compnent';
import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.componet';
import SignInPage from './pages/sigin/signin.component';
import ComparePage from './pages/compare/compare.component';
import ResultPage from './pages/result/result.component';

function App() {
  return (
    <div>
      <NavBar/>
        <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route path='/signin' component={SignInPage} /> 
            <Route path='/compare-submissions' component={ComparePage} /> 
            <Route path='/submissions-result' component={ResultPage} /> 

        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
