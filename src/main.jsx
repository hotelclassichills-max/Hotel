import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename matches vite.config.js `base` automatically via BASE_URL,
        so routing works whether the site is hosted at the domain root or
        under a GitHub Pages project subpath like /Hotel-Classic-Hills/. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
