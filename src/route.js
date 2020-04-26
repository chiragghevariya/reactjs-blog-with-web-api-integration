import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./views/Home";
import BlogList from "./views/BlogList";
import BlogDetail from "./views/BlogDetail";


const routeAll = () => (

    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/blog" component={BlogList} />
     <Route exact path="/blog/:blogId" component={BlogDetail} />
    </Switch>
);

export default routeAll;