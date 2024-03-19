import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Contact from './components/contact';
import Home from './components/home';
import Detail from './components/detail';
import Dashboard from './components/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    children: [
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/detail/:id',
        element: <Detail/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;