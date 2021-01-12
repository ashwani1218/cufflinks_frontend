import React from "react";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <h2>
            Cufflinks v<sup>1</sup>
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
