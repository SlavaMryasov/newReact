import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { characterDisplay } from './redux/state';
import { addMessage } from './redux/state';


export let rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addMessage={addMessage} newMessageText = {state.dialogsPage.newMessageText} characterDisplay={characterDisplay}/>
      </BrowserRouter>
    </React.StrictMode>
  );
  
reportWebVitals();
}

