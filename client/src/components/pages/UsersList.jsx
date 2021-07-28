import React, { Component } from 'react';
import { getUsers } from '../../service/fetchData';
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async getAllUsers() {
    const users = await getUsers();
    this.setState({ data: users });
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div className="UserList-container">
        {this.state.data.map((obj) => (
          <div className="card bg-dark " id="cardUsersList" key={obj._id}>
            <div className="card-body ">
              <h6 className="card-title">Username: {obj.userName}</h6>
              <h6 className="card-subtitle mb-2">Age: {obj.age} </h6>
              <h6 className="card-subtitle mb-2">Email: {obj.email} </h6>
              <h6 className="card-subtitle mb-2">Password: {obj.password} </h6>
              <button className="btn btn-warning BtnEdit">Edit</button>
              <button className="btn btn-danger BtnDelete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default UsersList;
