import React, { Component } from 'react';

class NewUserForm extends Component {
  state = {};
  render() {
    return (
      <div className="NewUserForm-container">
        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
            <label className="visually-hsidden">User Name:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Username..." />
            </div>
            <label className="visually-hsidden">Age:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Email..." />
            </div>
            <label className="visually-hsidden">Email:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Age..." />
            </div>
            <label className="visually-hsidden">Password:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Password..." />
            </div>
            <label className="visually-hsidden">Re-type Password:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Password..." />
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
