import React from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { Redirect } from "react-router-dom";
import { darkTheme } from "./Styled-components/theme";
import { GlobalStyles } from "./Styled-components/global";
import Nav from "./child-components/Nav";
import { connect } from "react-redux";
import { AddTeam } from "../redux/actions/TeamActions";
import MemberCard from "./child-components/team-components/MemberCard";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Modal from "react-modal";

class Team extends React.Component {
  state = {
    team: {},
    isThereMembers: false,
    isOpen: false,
  };

  componentDidMount() {
    try {
      const team = JSON.parse(localStorage.getItem("team"));
      if (team) {
        this.props.dispatch(AddTeam(team));
        this.setState(() => ({ team }));
        this.props.team.members.length > 0
          ? this.setState(() => ({ isThereMembers: true }))
          : this.setState(() => ({ isThereMembers: false }));
      }
    } catch (e) {
      //DO NOTHING
    }
  }

  openModal = () => {
    this.setState(() => ({ isOpen: true }));
  };
  closeModal = () => {
    this.setState(() => ({ isOpen: false }));
  };
  countNoOfMembers = () => {
    // const membersToRender = this.state.team.members.filter(
    //   (member) => member.display
    // );
    // const numRows = membersToRender.length;
    // return numRows;
  };

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <div className="page-container">
          <Header />
          <div className="dashboard">
            <div className="nav">
              {JSON.parse(localStorage.getItem("team")).token === "" ? (
                <Redirect to="/" />
              ) : (
                console.log("valid session")
              )}
              <Nav />
            </div>
            <div className="page">
              <div className="teams-div">
                <div className="title">
                  <h2>Team {this.props.team.teamname}</h2>
                  <Button
                    onClick={this.openModal}
                    shape="round"
                    icon={<EditOutlined />}
                    size={"middle"}
                  >
                    Edit
                  </Button>
                </div>

                <div className="teams-body">
                  {this.state.isThereMembers ? (
                    this.state.team.members.map((member) => (
                      <MemberCard member={member} />
                    ))
                  ) : (
                    <h4>You don't have any Members</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    team: state.team,
  };
};
export default connect(mapStateToProps)(Team);

// {this.state.team.members.length > 0 ? (
//   <h1>You have no Members</h1>
// ) : (
//   <div></div>
// )}
