import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter,Route,RouterProvider } from 'react-router-dom';

import Hammasi from './sayt1/Hammasi.jsx';
import Oqtuvchilar from './sayt1/Oqtuvchilar.jsx';
import Hodimlar from './sayt1/Hodimlar.jsx';
import Talabalar from './sayt1/Talabalar.jsx';
import Masovafiy from './sayt1/masafaviy.jsx';
// import Navbar from './sayt2/Navbar2.jsx';



const router = createBrowserRouter ([
    

{
        path:'/', 
        element:<Hammasi/>,
       
    },
   
    { 
        path:'/Oqtuvchilar',
        element:<Oqtuvchilar/> ,
       
    },
    {
        path:'/Hodimlar',
        element:<Hodimlar/>,
     
    },
    {
      path:'/Talabalar',
      element:<Talabalar/>,
   
  },
  {
    path:'/Masofaviy',
    element:<Masovafiy/>,
 
},  
// {
//     path:'/Navbar',
//     element:<Navbar/>,
 
// },
  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
    </React.StrictMode>
)




