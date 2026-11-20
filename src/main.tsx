import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import approutes from './app.routes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={approutes} />
  </StrictMode>,
)
