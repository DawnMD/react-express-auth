import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks = () => {
    if (this.props.auth) {
      return (
        <>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </>
      );
    }
  };
  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth.authenticated };
};
export default connect(mapStateToProps)(Header);
