import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import CollegeDetails from './Pages/CollegeDetails/CollegeDetails';
import PrivateRoute from './Routes/PrivateRoute';
import Colleges from './Pages/Colleges/Colleges';
import Admission from './Pages/Addmission/Admission';
import AdmissionForm from './Pages/Addmission/AdmissionForm';
import MyCollege from './Pages/MyCollege/MyCollege';
import AddReview from './Pages/MyCollege/AddReview';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/colleges",
        element: <Colleges/>
      },
      {
        path: "/college/:id",
        element: <PrivateRoute><CollegeDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: "/admission",
        element: <Admission/>,
        loader: () => fetch('http://localhost:5000/admission')
      },
      {
        path: "/admission/:id",
        element: <PrivateRoute><AdmissionForm/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/admission/${params.id}`)
      },
      {
        path: "/myCollege",
        element: <PrivateRoute><MyCollege/></PrivateRoute>
      },
      {
        path: "/addReview",
        element: <PrivateRoute><AddReview/></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
