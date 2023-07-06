import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Technologies from "./Technologies";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Footer />
      <img src={logo} />
    </div>
  );
};

export default App;
