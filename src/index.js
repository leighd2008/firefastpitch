import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import 'font-awesome/css/font-awesome.min.css'
import './fonts/Halls___.ttf' //halloween fonts

import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "tachyons";

import { store, persistor } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
