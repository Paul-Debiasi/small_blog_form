import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import BlogContextProvider from './utils/Context'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BlogContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</BlogContextProvider>,
	document.getElementById("root")
);


