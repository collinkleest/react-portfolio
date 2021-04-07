// react stuff
import React from "react";
import ReactDOM from "react-dom";

//routing
import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

// components
import { Nav } from './Components/Nav/index.js';
import { Contact } from './Components/Contact/index.js';
import { Projects } from './Components/Projects/index.js';
import { Resume } from "./Components/Resume/index.js";
import { About } from "./Components/About/index.js";
import { Home } from './Components/Home/index.js';

// styling
import './index.css';

const navLinks = [
  {title: 'Home', path: '/', component: Home },
  {title: 'About', path: '/about', component: About},
  {title: 'Projects', path: '/projects', component: Projects},
  {title: 'Resume', path: '/resume', component: Resume},
  {title: 'Contact', path: '/contact', component: Contact}  
];

const App = () => {
  return (
    <div>
        <Router>
          <Nav navLinks={navLinks}>
          </Nav>
          
          <Switch>
            {navLinks.map((item) => {
              return (
                <Route exact path={item.path}>
                  {item.component}
                </Route>
              )
            })}
          </Switch>
        </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));