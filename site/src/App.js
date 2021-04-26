import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';

import {Test} from './pages/test/component/Test';
//test
function App() {
    //this is the App^TM
    return (
        <Router>
            <Switch>
                {/* all the different routes go here aka the pages with the website.com/"ROUTE" */}
                <Route path="/test">
                    <Test/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;