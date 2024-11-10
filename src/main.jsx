import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/root/Root.jsx';
import ErrorPage from './componants/errorPage/ErrorPage.jsx';
import Home from './componants/home/Home.jsx';
import Statistics from './componants/statistics/Statistics.jsx';
import Dashboard from './componants/dashboard/Dashboard.jsx';
import GadgetDetail from './componants/gadget/GadgetDetail.jsx';
import History from './componants/history/History.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('./categories.json'),
      },
      {
        path:'gadget/:gadgetId',
        element:<GadgetDetail></GadgetDetail>,
        loader: () => fetch('./gadgetItems.json'),
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/history",
        element:<History></History>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
