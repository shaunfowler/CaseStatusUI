import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/root/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { caseStatusReducer } from "./store/reducers";
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(
  caseStatusReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
