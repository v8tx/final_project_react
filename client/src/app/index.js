import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";


//we. . .need this for tap injection;
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

//WRITE AN APP TO KEEP YOUR PORTFOLIO RUNNING DURING OPTIMAL PERFORMANCE;
ReactDOM.render(
	<Provider store={store}>
	<Routes/>
	</Provider>, document.getElementById("app"));
