import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Home';
import DashBoard from './Components/DashBoard/DashBoard';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children:[
      {
        path: "/",
        element: <Home></Home>
  
      },
      {
        path: "/books/:bookId",
        loader:()=>fetch('/booksData.json'),
        element:<BookDetails></BookDetails>
      }
      ,
      {
        path: "/dash_board",
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
