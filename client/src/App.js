import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
