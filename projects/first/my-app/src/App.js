import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="modules">
      <div className="app-wrapper">
        <header className="header">
          <img id="logo" src={logo} />
        </header>
        <nav className="nav">
          <div><a>Profile</a></div>
          <div><a>Messages</a></div>
          <div><a>News</a></div>
          <div><a>Music</a></div>
          <div><a>Settings</a></div>
        </nav>
        <div className="content">
          <div className="img">
            <img className="background" src="https://fullhdoboi.ru/wp-content/uploads/_ph/6/283114741.jpg" />
          </div>
          <div className="data">

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
