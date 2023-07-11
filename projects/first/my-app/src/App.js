import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

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
