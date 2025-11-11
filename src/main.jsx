import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.js'; // Import i18n configuration

// A simple fallback component for Suspense
const loadingMarkup = (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-primary-bg">
    <p className="text-xl text-primary-text">loading...</p>
  </div>
)

createRoot(document.getElementById('root')).render(
  <Suspense fallback={loadingMarkup}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>,
)
