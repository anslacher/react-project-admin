import React, { lazy } from "react"
import Home from '@/views/Home'
// import About from '@/views/About'
import { Navigate } from 'react-router'

//懒加载
const About = lazy(() => import('@/views/About'))
const User = lazy(()=>import('@/views/User'))
//懒加载的模式需要嵌套 React.Suspense fallback={<div>Loading..</div>  } lazy必须搭配 React.Suspense使用

const routes = [{
    path: '/',
    element: <Navigate to='/Home'></Navigate>
},
{
    path: '/Home',
    element: <Home></Home>
},
{
    path: '/About',
    element: <About></About>
},
{
    path: '/User',
    element: <User></User>
}
]

export default routes