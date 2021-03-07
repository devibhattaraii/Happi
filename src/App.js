import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import logo from './assets/logo.png'

const Header = () => {
  return (
    <div class="main-header">
      <nav class="header-nav">
        <img class="logo" src={logo} alt="Happi"/>
        <div className="header-links">
          <a class="subtitle header-text" href="/">Home</a>
          <a class="subtitle header-text" href="/About">About</a>
        </div>
      </nav>
    </div>
  )
};

const Footer = () => {
  return (
    <div class="main-footer">
        <nav class="footer-nav">
          <a class="subtitle" href="https://wics-hacks-2021-12166.devpost.com/">Devpost</a>
          <a class="subtitle" href="#">Contact</a>
        </nav>
    </div>
  )
};

function App() {
  return (
    <section class="container">
      <Header/>
      <LandingPage/>
      <Footer/>
    </section>

  );
}

export default App;
