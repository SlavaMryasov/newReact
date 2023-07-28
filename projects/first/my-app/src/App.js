import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Routes, Route } from "react-router-dom";

const App = (props) => {

  return (

    <div className="modules">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<DialogsContainer
              dialogsPage={props.state.dialogsPage}
              newMessageText={props.newMessageText}
              dispatch={props.dispatch}
            />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;





