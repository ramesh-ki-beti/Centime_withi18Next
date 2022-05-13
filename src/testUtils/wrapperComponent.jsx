import React from "react";
import { Provider } from "react-redux";

export default function wrapperComponent(component, store) {
  return (
    <Provider store={store}>
      {/** @ts-ignore */}
      {component}
    </Provider>
  );
}
