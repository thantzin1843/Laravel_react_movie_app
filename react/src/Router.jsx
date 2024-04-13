
import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import MovieList from './Pages/MovieList'
import ActorList from './Pages/ActorList'
import ActorCreate from './Pages/admin/ActorCreate'
import DashboardLayout from './Pages/admin/DashboardLayout'
import CategoryList from './Pages/admin/CategoryList'
import CategoryCreate from './Pages/admin/CategoryCreate'
import AdminActorList from './Pages/admin/AdminActorList'
import AdminMovieList from './Pages/admin/AdminMovieList'
import AdminMovieCreate from './Pages/admin/AdminMovieCreate'
export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'movie/list',
                element:<MovieList/>
            },
            {
                path:'actor/list',
                element:<ActorList/>
            }
        ]
    },
/// admin 
    {
        path:'/admin',
        element:<DashboardLayout/>,
        children:[
            {
                path:'category/list',
                element:<CategoryList/>
            },
            {
                path:'category/create',
                element:<CategoryCreate/>
            },
            {
                path:'actor/list',
                element:<AdminActorList/>
            },
            {
                path:'actor/create',
                element:<ActorCreate/>
            },
            {
                path:'movie/list',
                element:<AdminMovieList/>
            },
            {
                path:'movie/create',
                element:<AdminMovieCreate/>
            },
        ]
    },

])