import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider,
} from "@chakra-ui/core";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
