import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import New from './components/New'
import './App.css';
import Sidebar from './components/SideBar'
import Table from './components/Table'
import Chart from './components/chart'


function App() {
  return (
    <BrowserRouter className="App">
      <Sidebar />
      <Switch>
      <Route exact path="/" component={Login}/>
         <Route path="/signup" component={SignUp}/>
         <Route path="/table" component={Table}/>
         <Route path="/chart" component={Chart}/>
         <Route path="/dashboard" component={Dashboard}/>
         <Route path="/new" component={New}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
