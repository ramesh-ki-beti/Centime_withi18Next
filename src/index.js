import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./i18n";

const App = React.lazy(() => import('./app'))
const MOUNT_NODE = document.getElementById("root");
const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <React.Suspense fallback="loading...">
       <App />
       </React.Suspense>
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE
);
