import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/state';

export let rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addMessage={store.addMessage.bind(store)}
          newMessageText={store._state.dialogsPage.newMessageText}
          characterDisplay={store.characterDisplay.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );

  reportWebVitals();
}

rerender(store.getState());

store.subscribe(rerender);
