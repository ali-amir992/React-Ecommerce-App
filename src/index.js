import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
        <App />
        <Toaster/>
        </Provider>
    </BrowserRouter>
);


