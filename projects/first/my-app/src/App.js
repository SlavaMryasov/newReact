import "./App.css";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import PhotosContainer from "./components/Photos/PhotosContainer";

const App = (props) => {
  return (
    <div className="modules">
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId?" element={<Profile />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/photos" element={<PhotosContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;





