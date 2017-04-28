import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import reducers from "./reducers/index";
import { addData } from "./actions/profile";

if (typeof window === 'undefined') {
	global.window = {};
}

const logger = createLogger({
    timestamp: true,
});
const initialState = {};

/* eslint-disable no-underscore-dangle */
const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunkMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


delete window.__PRELOADED_STATE__;
/* eslint-enable */
const store = createStore(reducers, enhancer);


function doThis() {
    let profile = localStorage.getItem("profile");
    let profileData = profile ? JSON.parse(localStorage.profile) : {};
    store.dispatch(addData(profileData));
}

export default store;
