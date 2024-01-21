import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Events from './pages/Events';
import Organizers from './pages/Organizers';
import Participants from './pages/Participants';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/organizers',
    element: <Organizers />
  },
  {
    path: '/participants',
    element: <Participants />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/signin',
    element: <SignIn />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
