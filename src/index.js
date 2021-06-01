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
import { WorkExperience } from "./Components/WorkExperience/index.js";
import { Footer } from "./Components/Footer/Footer.js";

// styling
import './index.css';

const navLinks = [
  {title: 'Home', path: '/', component: Home },
  {title: 'About', path: '/about', component: About},
  {title: 'Work Experience', path: '/workexperience', component: WorkExperience},
  {title: 'Projects', path: '/projects', component: Projects},
  {title: 'Resume', path: '/resume', component: Resume},
  {title: 'Contact', path: '/contact', component: Contact}  
];

const App = () => {
  
  return (
    <div>
        <Router>
          
          <Switch>

            <Route exact path="/">
              <Home navLinks={navLinks} />
            </Route>

            <Route path="/about">
              <Nav navLinks={navLinks}>
              </Nav>
              <About />
            </Route>

            <Route path="/workexperience">
              <Nav navLinks={navLinks}>
              </Nav>
              <WorkExperience />
            </Route>

            <Route path="/projects">
              <Nav navLinks={navLinks}>
              </Nav>
              <Projects />
            </Route>

            <Route path="/resume">
              <Nav navLinks={navLinks}>
              </Nav>
              <Resume  />
            </Route>

            <Route path="/contact">
              <Nav navLinks={navLinks}>
              </Nav>
              <Contact  />
            </Route>

          </Switch>
        </Router>
        <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));