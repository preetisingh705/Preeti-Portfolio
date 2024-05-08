import React from 'react';
// components
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Services from './components/Service/Services';
import Work from './components/Project/Work';
import Contact from './components/Contact/Contact';
import Cursur from './components/Cursor/Cursur';
import ScollTop from './components/ScrollTop/ScollTop';
import Error from './components/Error/Error';
import { RouterProvider, createBrowserRouter ,Outlet } from 'react-router-dom'; // Import RouterProvider and createBrowserRouter



const App = () => {
  
  
  return ( 
   <div className='dark:bg-black bg-white bg-no-repeat overflow-hidden '>
      <Nav />
      <Cursur />
      <ScollTop />
      <Outlet/>

      <Header />
      <Banner />
      <About />
      <Work />
      <Services />
      <Contact />

   </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
      {
        path: '/home',
        element: <Header />
      },
      {
        path: '/banner',
        element: <Banner />
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/work',
        element: <Work />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/Contact',
        element: <Contact />
      }
    ],
    errorElement: <Error />
  }
]);
const Root = () => {
  return (
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  );
};

export default Root; 
