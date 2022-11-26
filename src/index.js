import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomTheme from "./style/themeProvider"

import store from "./redux/configureStore";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CustomTheme>
      <Provider store={store}>
        <App />
      </Provider>
    </CustomTheme>
)