import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Work from './pages/Work.tsx'
import NotFound from './pages/NotFound.tsx'
import Default from './layouts/Default.tsx'
import About from './pages/About.tsx'
import Blog from './pages/Blog.tsx'
import Services from './pages/Services.tsx'
import Contact from './pages/Contact.tsx'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Project from './pages/Project.tsx'
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Test from './pages/Test.tsx'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const router = createBrowserRouter([

	{

		path: "/",
		element: <Default/>,
		children: [

			{ path: "/", element: <Home/> },
			{ path: "/work", element: <Work/> },
			{ path: "/about", element: <About/> },
			{ path: "/blog", element: <Blog/> },
			{ path: "/services", element: <Services/> },
			{ path: "/contact", element: <Contact/> },
			{ path: "/project/:project", element: <Project/>},
			{ path: "*", element: <NotFound/> }

		]

	}, /*{ path: "/test", element: <Test/>},*/

]);

createRoot(document.getElementById('root')!).render(

    <StrictMode>
		<RouterProvider router={router} />
    </StrictMode>,

)
