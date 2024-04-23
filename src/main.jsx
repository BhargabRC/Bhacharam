import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ShopContextProvider>
      <App />
      </ShopContextProvider>
    </Router>
  </React.StrictMode>,
)
