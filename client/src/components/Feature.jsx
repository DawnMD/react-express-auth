import { Component } from "react";
import requireAuth from "./requireAuth";

class Feature extends Component {
  render() {
    return <div>Feature Page</div>;
  }
}

export default requireAuth(Feature);
