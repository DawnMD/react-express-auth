import { Component } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated };
  };
  return connect(mapStateToProps)(ComposedComponent);
};
