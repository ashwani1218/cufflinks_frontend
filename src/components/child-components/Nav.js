import React, { Component } from "react";
import { Menu } from "antd";
import { HomeOutlined, TeamOutlined, LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/TeamActions";

const Nav = (props) => {
  const logoutUser = () => {
    props.dispatch(logout());

    localStorage.removeItem("team");
    localStorage.removeItem("token");
  };
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="navigation">
      <Menu
        onClick={handleClick}
        theme="dark"
        style={{
          width: "7vh",
          height: "100vh",
          display: "flex",
          "flex-direction": "column",
          "justify-content": "space-evenly",
          padding: "10px",
        }}
        mode="vertical"
      >
        <NavLink to={`/dashboard`}>
          <Menu.Item
            key="Home"
            icon={<HomeOutlined />}
            title="Home"
          ></Menu.Item>
        </NavLink>
        <NavLink to={`/team`}>
          <Menu.Item
            key="Team"
            icon={<TeamOutlined />}
            title="Team"
          ></Menu.Item>
        </NavLink>

        <NavLink to={`/`}>
          <Menu.Item
            onClick={logoutUser}
            key="Logout"
            icon={<LogoutOutlined />}
            title="Logout"
          ></Menu.Item>
        </NavLink>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    team: state.team,
  };
};
export default connect(mapStateToProps)(Nav);
