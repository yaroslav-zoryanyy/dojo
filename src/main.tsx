import {createRoot} from 'react-dom/client'
import './index.css'
import Layout from "./layouts/Layout.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";

const routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
            {index: true, element:<HomePage/>}
        ]},
])


createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
