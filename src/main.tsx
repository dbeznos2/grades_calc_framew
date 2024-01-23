import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SemesterBox from "./components/SemesterBox.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {path:"/Maths",
            element:   <SemesterBox subject={"Maths"}/>},

            {path:"/Societe",
                element:   <SemesterBox subject={"Société"}/>},
            {path:"/Anglais",
                element:   <SemesterBox subject={"Anglais"}/>},
            {path:"/Modules",
                element:   <SemesterBox subject={"Modules"}/>},
            {path:"/CIE",
                element:   <SemesterBox subject={"CIE"}/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
