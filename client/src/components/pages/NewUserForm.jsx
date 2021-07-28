import React, { Component } from 'react';
import { postNewUser, editOneUser, getUsers } from '../../service/fetchData';

class NewUserForm extends Component {
  state = {
    userName: '',
    email: '',
    age: 18,
    password: '',
    password2: '',
  };

  async componentDidMount() {
    if (this.props.match.params.id) {
      const user = (await getUsers()).find((user) => user._id === this.props.match.params.id);
      this.setState(user);
    }
  }

  handleUserName = (event) => {
    this.setState({ userName: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleAge = (event) => {
    this.setState({ age: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handlePassword2 = (event) => {
    this.setState({ password2: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const objToSend = {
      userName: this.state.userName,
      email: this.state.email,
      age: this.state.age,
      password: this.state.password,
      password2: this.state.password2,
    };

    if (this.state._id) {
      editOneUser(this.state._id, objToSend);
    } else {
      postNewUser(objToSend);
    }

    const history = this.props.history;
    history.push('/users');
    console.log('I will send this ', objToSend);
  };

  render() {
    return (
      <div className="NewUserForm-container">
        <form onSubmit={this.handleSubmit} className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hsidden">User Name:</label>
            <div className="input-group">
              <input
                value={this.state.userName}
                onChange={this.handleUserName}
                type="text"
                className="form-control"
                placeholder="Username..."
              />
            </div>
            <label className="visually-hsidden">Age:</label>
            <div className="input-group">
              <input
                value={this.state.age}
                onChange={this.handleAge}
                type="text"
                className="form-control"
                placeholder="Age..."
              />
            </div>
            <label className="visually-hsidden">Email:</label>
            <div className="input-group">
              <input
                value={this.state.email}
                onChange={this.handleEmail}
                type="text"
                className="form-control"
                placeholder="Email..."
              />
            </div>

            <label className="visually-hsidden">Password:</label>
            <div className="input-group">
              <input
                value={this.state.password}
                onChange={this.handlePassword}
                type="password"
                className="form-control"
                placeholder="Password..."
              />
            </div>
            <label className="visually-hsidden">Re-type Password:</label>
            <div className="input-group">
              <input
                value={this.state.password2}
                onChange={this.handlePassword2}
                type="password"
                className="form-control"
                placeholder="Password..."
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning formBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewUserForm;
