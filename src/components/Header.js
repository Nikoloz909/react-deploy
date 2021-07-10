/* eslint-disable no-script-url */
import React from 'react'
import About from './About';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Managment from './Managment';
export default function Header() {
    return (
        <>
        <div className='background-img'>
           <h2 className="banner-title container ">about us</h2>
        </div>
        <Router>
        <div className="second-header d-flex">
            <nav className='container second-navbar'>
                <ul className='second-ul d-flex'>
                    <li className='second-li'>
                        <Link to="/About">about us</Link>
                    </li>
                    <li className='second-li'>
                        <Link to="Managment">managment team</Link>
                     </li>
                    <li className='second-li'>
                        <Link to="javascript:void(0)">locations</Link>
                    </li>
                    <li className='second-li'>
                        <Link to="javascript:void(0)">pearson VUE</Link>
                    </li>
                    <li className='second-li'>
                        <Link to="javascript:void(0)">Gender pay gap report</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Managment">
                   <Managment />
                </Route>
          </Switch>
        </div>
        </Router>
        </>
    )
}
