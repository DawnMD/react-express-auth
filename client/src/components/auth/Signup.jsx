import { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { signup } from "../../actions";

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <fieldset>
          <Field
            name="email"
            type="email"
            component="input"
            placeholder="email"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <Field
            name="password"
            type="password"
            component="input"
            placeholder="password"
            autoComplete="off"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up</button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};
export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({
    form: "signup",
  })
)(Signup);
