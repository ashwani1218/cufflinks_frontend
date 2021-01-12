import React from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { Redirect } from "react-router-dom";
import { darkTheme } from "./Styled-components/theme";
import { GlobalStyles } from "./Styled-components/global";
import Nav from "./child-components/Nav";
import { connect } from "react-redux";

const DashBoard = () => {
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
        </div>
      </div>
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    team: state.team,
  };
};
export default connect(mapStateToProps)(DashBoard);
