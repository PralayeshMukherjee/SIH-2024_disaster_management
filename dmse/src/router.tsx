import { createBrowserRouter , Navigate} from 'react-router-dom';
import HomePage from '@/pages/Homepage';
import FuturePages from '@/pages/FuturePages';
import PastPages from '@/pages/PastPages';
import Analysis from '@/pages/Analysis';
import DashboardLayout from './layouts/DashboardLayout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard/home" />,
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'Analysis',
                element: <Analysis />,
            },
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'FuturePages',
                element: <FuturePages />,
            },
            {
                path: 'PastPages',
                element: <PastPages/>,
            },
         
        ],
    },
  

])


   
       
  export default router;
 
   
