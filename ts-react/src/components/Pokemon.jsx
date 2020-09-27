import React, { Component } from "react";
import GlobalState from "../contexts/GolobalState";

class Pokemon extends Component {
  render() {
    return (
      <GlobalState.Consumer>
        {(context) => <div>hello</div>};
      </GlobalState.Consumer>
    );
  }
}

export default Pokemon;
