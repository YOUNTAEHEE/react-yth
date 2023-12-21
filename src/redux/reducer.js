import { combineReducers } from "redux";
import * as types from "./actionType";

const activeReducer = (state = { active: [] }, action) => {
  if (action.type === types.ACTIVE.start) return state;
  else if (action.type === types.ACTIVE.success)
    return { ...state, active: action.payload };
  else if (action.type === types.ACTIVE.fail)
    return { ...state, active: action.payload };
  else return state;
};

const memberReducer = (state = { member: [] }, action) => {
  if (action.type === types.MEMBER.start) return state;
  else if (action.type === types.MEMBER.success)
    return { ...state, member: action.payload };
  else if (action.type === types.MEMBER.fail)
    return { ...state, member: action.payload };
  else return state;
};
const youtubeReducer = (state = { youtube: [] }, action) => {
  if (action.type === types.YOUTUBE.start) return state;
  else if (action.type === types.YOUTUBE.success)
    return { ...state, youtube: action.payload };
  else if (action.type === types.YOUTUBE.fail)
    return { ...state, youtube: action.payload };
  else return state;
};
const menuReducer = (state = { menu: false }, action) => {
  if (action.type === types.MENU.start)
    return { ...state, menu: action.payload };
  else return state;
};
const darkReducer = (state = { dark: false }, action) => {
  if (action.type === types.DARK.start)
    return { ...state, dark: action.payload };
  else return state;
};
const modalReducer = (state = { modal: false }, action) => {
  if (action.type === types.MODAL.start)
    return { ...state, modal: action.payload };
  else return state;
};
const flickrReducer = (state = { flickr: [] }, action) => {
  if (action.type === types.FLICKR.start) return state;
  else if (action.type === types.FLICKR.success)
    return { ...state, flickr: action.payload };
  else if (action.type === types.FLICKR.fail)
    return { ...state, flickr: action.payload };
  else return state;
};
const reducers = combineReducers({
  activeReducer,
  memberReducer,
  youtubeReducer,
  menuReducer,
  darkReducer,
  modalReducer,
  flickrReducer,
});
export default reducers;
