import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "...";
      case false:
        return "log in";
      default:
        return "log out";
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div>
        <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps(state) {
//     return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
