import React from "react";
import "./App.css";
import { Store } from "./Store";
import { Link } from "@reach/router";

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode !!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favouret</Link>

          <p>Episodes : {state.episodes.length}</p>
          <p>Favourites : {state.favourites.length}</p>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}

export default App;
