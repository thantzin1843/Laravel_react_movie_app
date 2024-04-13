import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Router.jsx'
import { UserContextProvider } from './Context/UserContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
