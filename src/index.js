import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import routeAll from "./route";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./views/common/Header";
import Footer from "./views/common/Footer";
import CommonJavascript from "./views/common/CommonJavascript";
import {Helmet} from "react-helmet";

const routes = routeAll();
ReactDOM.render(
  <Router>
    <Helmet>
      <title>Home</title>
      <meta content="" name="descriptison" />
      <meta content="" name="keywords" />
    </Helmet>
    <Header />
    {routes}
    <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
