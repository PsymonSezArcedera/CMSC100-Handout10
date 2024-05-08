import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import Root from './pages/Root';
import Subjects from './pages/Subjects';
import Home from './pages/Home';

const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { path: '/', element: <Home /> },
    { path: 'subjects', element: <Subjects /> }
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);