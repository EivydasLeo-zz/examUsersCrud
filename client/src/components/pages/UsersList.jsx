import React, { Component } from 'react';
import { getUsers } from '../../service/fetchData';
import { deleteOneUser } from './../../service/fetchData';
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

  async handleDelete(userId) {
    await deleteOneUser(userId);
    this.getAllUsers();
  }

  async handleEdit(_id) {
    this.props.history.push('edit_user/' + _id);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div className="UserList-container">
        {/* <div className="filteredBtn">
          <button className="btn btn-primary">Smth</button>
          <button className="btn btn-success">Smth</button>
          <button className="btn btn-info ">Smth</button>
        </div> */}
        {this.state.data.map((obj) => (
          <div className="card bg-dark " id="cardUsersList" key={obj._id}>
            <div className="card-body ">
              <h6 className="card-title">Username: {obj.userName}</h6>
              <h6 className="card-subtitle mb-2">Email: {obj.email} </h6>
              <h6 className="card-subtitle mb-2">Age: {obj.age} </h6>
              <h6 className="card-subtitle mb-2">Password: {obj.password} </h6>
              <button onClick={() => this.handleEdit(obj._id)} className="btn btn-warning BtnEdit">
                Edit
              </button>
              <button onClick={() => this.handleDelete(obj._id)} className="btn btn-danger BtnDelete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default UsersList;
