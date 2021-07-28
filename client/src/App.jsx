import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router';
import NewUser from './components/pages/NewUserForm';
import Users from './components/pages/UsersList';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route path="/users/new" component={NewUser}></Route>
            <Route path="/users" component={Users}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
