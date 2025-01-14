import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'
import {ToastContainer} from 'react-toastify'
import "react-toastify/ReactToastify.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
    <App />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  </AuthProvider>
  </StrictMode>,
)