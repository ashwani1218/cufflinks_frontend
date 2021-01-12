import React from "react";
import { AddTeam } from "../../redux/actions/TeamActions";
import { connect } from "react-redux";
import Axios from "axios";
import RegisterForm from "./login-components/RegisterForm";
import LoginForm from "./login-components/LoginForm";
class LoginPage extends React.Component {
  state = {};

  componentDidMount() {
    try {
      const user = JSON.parse(localStorage.getItem("team"));
      if (user) {
        this.props.dispatch(AddTeam(user));
      }
    } catch (e) {
      //DO NOTHING
    }
  }
  changeView = () => {
    this.setState((prevState) => ({ register: !prevState.register }));
  };
  render() {
    return (
      <div className="login">
        <div className="login-form">
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.register && (
            <RegisterForm
              onSubmit={({ teamname, password }) => {
                Axios.post("http://localhost:8080/register", {
                  teamname,
                  password,
                }).then((resp) => {
                  if (resp.data.response_code === "200") {
                    alert("Registration Successful");
                    window.location.reload(false);
                  } else if (resp.data.response_code === "402") {
                    alert("Already an team");
                  } else {
                    alert("Something went wrong");
                  }
                });
              }}
            />
          )}
          {!this.state.register && (
            <LoginForm
              onSubmit={({ teamname, password }) => {
                Axios.post("http://localhost:8080/login", {
                  teamname,
                  password,
                }).then((resp) => {
                  if (resp.data.response_code === "200") {
                    console.log(resp.data);

                    let team = {
                      teamname: resp.data.team.teamname,
                      members: [...resp.data.team.members],
                    };
                    console.log(team); //?
                    this.props.dispatch(AddTeam(team));
                    const json = JSON.stringify(team);
                    localStorage.setItem("team", json);
                    localStorage.setItem("token", resp.data.token);

                    this.props.history.push("/dashboard");
                  } else if (resp.data.response_code === "401") {
                    this.setState(() => ({
                      error: "Please Provide Correct Credentials",
                    }));
                  }
                });
              }}
            />
          )}
          {!this.state.register ? (
            <p onClick={this.changeView}>New Here?</p>
          ) : (
            <p onClick={this.changeView}>Already a User?</p>
          )}
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
