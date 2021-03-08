import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

import LandingPage from './screens/LandingPage/LandingPage';
import Conditions from './components/Conditions';
import Professionals from './components/Professionals';

import './App.css';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <div className="main-header">
      <nav className="header-nav">
        <Link to="/">
          <img className="logo" src={logo} alt="Happi" />
        </Link>
        <div className="header-links">
          <Link className="subtitle header-text" to="/">
            Home
          </Link>
          <Link className="subtitle header-text" to="/conditions">
            Conditions
          </Link>
          <Link className="subtitle header-text" to="/professionals">
            Professionals
          </Link>
          <Link className="subtitle header-text" to="/About">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="main-footer">
      <nav className="footer-nav">
        <a
          className="subtitle"
          href="https://wics-hacks-2021-12166.devpost.com/"
        >
          Devpost
        </a>
        <a className="subtitle" href="/">
          Contact
        </a>
      </nav>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/professionals" component={Professionals} />
        <Route path="/conditions" component={Conditions} />
        <Route path="/" component={LandingPage} />
      </Switch>
      {/* <div className="container"> */}
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
