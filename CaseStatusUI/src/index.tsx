import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/root/App';
import { caseStatusReducer } from "./store/reducers";
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, caseStatusReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals(console.log);
