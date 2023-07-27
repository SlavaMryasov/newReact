import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './redux/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}
          newMessageText={state.dialogsPage.newMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );

  reportWebVitals();
}

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerender(state)
});