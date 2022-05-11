import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index.jsx'

import ScrollToTop from './components/utils/ScrollToTop.js'
import Navbar from './components/Layouts/Navbar/index.jsx'
import Translate from './Pages/Translate/index.jsx'

const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/translate',
        component: Translate
    }
]




export default function RouteComponent() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Navbar/>
        <Routes>
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={<route.component/>} />
            ))}
        </Routes>
    </BrowserRouter>
  )
}
