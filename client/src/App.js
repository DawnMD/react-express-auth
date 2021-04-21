import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Singin from "./components/auth/Signin";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signin" component={Singin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/feature" component={Feature} />
            <Route exact path="/signout" component={Signout} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
