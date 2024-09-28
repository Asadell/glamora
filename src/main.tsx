import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beranda from './pages/beranda';
import Fitur from './pages/fitur';
import Survey from './pages/survey/survey';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda/>,
  },
  {
    path: '/fitur',
    element: <Fitur/>,
  },
  {
    path: '/survey',
    element: <Survey/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
