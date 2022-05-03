import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import 'antd/dist/antd.css';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);
