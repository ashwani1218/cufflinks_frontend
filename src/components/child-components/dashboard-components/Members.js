import React from "react";
import { connect } from "react-redux";

class Members extends React.Component {
  state = {};
  render() {
    return <div className="member"></div>;
  }
}

export default connect()(Members);
