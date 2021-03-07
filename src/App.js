import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <div className="main-header">
      <nav className="header-nav">
        <img className="logo" src={logo} alt="Happi" />
        <div className="header-links">
          <a className="subtitle header-text" href="/">
            Home
          </a>
          <a className="subtitle header-text" href="/About">
            Community
          </a>
          <a className="subtitle header-text" href="/About">
            Professionals
          </a>
          <a className="subtitle header-text" href="/About">
            About
          </a>
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
    <div className="container">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
