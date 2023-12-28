import { combineReducers } from "redux";
import * as types from "./action";

const quotesReducer = (state = { quotes: [] }, action) => {
  switch (action.type) {
    case types.QUOTES.success:
      return { ...state, quotes: action.payload };
      
    default:
      return state;
  }
};

const activeReducer = (state = { active: [] }, action) => {
  switch (action.type) {
    case types.ACTIVE.success:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

const memberReducer = (state = { member: [] }, action) => {
  switch (action.type) {
    case types.MEMBER.success:
      return { ...state, member: action.payload };
    default:
      return state;
  }
};
const youtubeReducer = (state = { youtube: [] }, action) => {
  switch (action.type) {
    case types.YOUTUBE.success:
      return { ...state, youtube: action.payload };
    default:
      return state;
  }
};
const menuReducer = (state = { menu: false }, action) => {
  switch (action.type) {
    case types.MENU.start:
      return { ...state, menu: action.payload };
    default:
      return state;
  }
};
const darkReducer = (state = { dark: false }, action) => {
  switch (action.type) {
    case types.DARK.start:
      return { ...state, dark: action.payload };
    default:
      return state;
  }
};
const modalReducer = (state = { modal: false }, action) => {
  switch (action.type) {
    case types.MODAL.start:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};
const reducers = combineReducers({
  activeReducer,
  memberReducer,
  youtubeReducer,
  menuReducer,
  darkReducer,
  modalReducer,
  quotesReducer,
});
export default reducers;
