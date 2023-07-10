import "./App.css";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="modules">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  );
};

export default App;
