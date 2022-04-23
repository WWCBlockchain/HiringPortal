import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from '../HomePage/HomePage';

const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<HomePage />} />
                <Route path = "/policy" element = {<PolicyPage />} />
            </Routes>
        </Router>
    );
};

export default Webpages;