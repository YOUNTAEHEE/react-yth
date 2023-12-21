import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import youtubeReducer from "./redux/youtubeSlice";
import memberReducer from "./redux/memberSlice";
import activeReducer from "./redux/activeSlice";
import flickrReducer from "./redux/flickrSlice";
import modalReducer from "./redux/modalSlice";
import menuReducer from "./redux/menuSlice";
import darkReducer from "./redux/darkSlice";
const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    member: memberReducer,
    active: activeReducer,
    flickr: flickrReducer,
    menu: menuReducer,
    dark: darkReducer,
    modal: modalReducer,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
