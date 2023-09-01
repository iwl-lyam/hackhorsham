import React from 'react'
import Home from './pages/home/Home.jsx'
import Contact from './pages/contact/Contact.jsx'
import Calendar from './pages/calendar/Calendar.jsx'
import Nav from './comps/Nav.jsx'
import './Main.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/calendar",
            element: <Calendar />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ])

    return (
        <div>
            <Nav />
            <RouterProvider router={router} />
        </div>
    )
}