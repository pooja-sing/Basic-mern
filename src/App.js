import Login from "./components/Login";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";





function App() {

  const router = createBrowserRouter([
   

    {
      path: '/',
      element: <Home></Home>,
    },  
    {
      path: '/login',
      element: <Login></Login>,
    },
    
      
    {
      path: '/signup',
      element: <Signup></Signup>,
    },
  
  
  ])
  return (
    <div>
  
   
    <RouterProvider router={router} />
 
   
    </div>


  );
}

export default App;
