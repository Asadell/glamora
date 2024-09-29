import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beranda from './pages/beranda';
import Analisis from './pages/analisis';
import Progress from './pages/progress';
import Virtual from './pages/virtual';
import Layout from './components/Layout';
import ErrorElement from './components/ErrorElement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        index: true,
        element: <Beranda/>,
      },
      {
        path: '/analisis',
        element: <Analisis/>,
      },
      {
        path: '/progress',
        element: <Progress/>,
      },
      {
        path: '/virtual',
        element: <Virtual/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
