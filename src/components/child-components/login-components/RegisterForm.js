import React from "react";

class RegisterForm extends React.Component {
  state = {
    teamname: "",
    password: "",
  };

  onteamnameChange = (e) => {
    const teamname = e.target.value;
    this.setState(() => ({ teamname }));
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.teamname || !this.state.password) {
      this.setState(() => ({ error: "Provide Proper Credentials" }));
    } else {
      this.props.onSubmit({
        teamname: this.state.teamname,
        password: this.state.password,
      });
    }
  };

  render() {
    return (
      <div className="form-div">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            className="form-input"
            id="teamname"
            type="text"
            placeholder="teamname"
            autoFocus
            value={this.state.teamname}
            onChange={this.onteamnameChange}
          />

          <input
            className="form-input"
            id="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
