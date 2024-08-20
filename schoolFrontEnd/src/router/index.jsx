import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../components/login/Login.jsx';
import SignUp from '../pages/SignUp.jsx';
import Users from '../pages/Users.jsx';
import Layout from '../layouts/Layout.jsx';
import StudentLayout from '../layouts/StudentLayout.jsx';
import GuestLayout from '../layouts/GuestLayout.jsx';
import StudentDasboard from '../components/students/StudentDasboard.jsx';
import AdminLayout from '../layouts/AdminLayout.jsx';
import AdminDashboard from '../components/admin/AdminDashboard.jsx';
import ManageParents from '../components/admin/ManageParents.jsx';
export const LOGIN_ROUTE = '/login'
export const STUDENT_DASHBORD_ROUTE = '/student/dashbord'
export const ADMIN_DASHBORD_ROUTE = '/admin/'
export const ADMIN_MANAGE_PARENTS_ROUTE = '/admin/manage-parents'
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/*',
                element: <p>Not FOund 404</p>,
            },
        ]
    },
    {
        element: <GuestLayout/>,
        children: [
            {
                path: LOGIN_ROUTE,
                element: <Login />,
            },
        ]
    },
    {
        element: <StudentLayout/>,
        children: [
            {
                path: STUDENT_DASHBORD_ROUTE,
                element: <StudentDasboard/>,
            },
        ]
    },
    {
        element: <AdminLayout/>,
        children: [
            {
                path: ADMIN_DASHBORD_ROUTE,
                element: <AdminDashboard/>,
            },
            {
                path: ADMIN_MANAGE_PARENTS_ROUTE,
                element: <ManageParents/>,
            },
        ]
    }
])