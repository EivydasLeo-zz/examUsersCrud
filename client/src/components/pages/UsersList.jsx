import React, { Component } from 'react';

class UsersList extends Component {
  state = {};
  render() {
    return (
      <div className="UserList-container">
        <div className="card bg-dark" id="cardUsersList">
          <div className="card-body">
            <h5 className="card-title">title</h5>
            <h6 className="card-subtitle mb-2">Continent: </h6>
            <h6 className="card-subtitle mb-2">Population: </h6>
            <h6 className="card-subtitle mb-2">Preference: </h6>
            <button className="btn btn-warning">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default UsersList;
