import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router';
import NewUserForm from './components/pages/NewUserForm';
import UsersList from './components/pages/UsersList';
import Footer from './components/Footer';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route path="/user/new" component={NewUserForm}></Route>
            <Route path="/edit_user/:id" component={NewUserForm}></Route>
            <Route path="/users" component={UsersList}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
