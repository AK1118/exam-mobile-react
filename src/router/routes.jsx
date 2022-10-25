import LazyLoad from "../utils/lazyLoad";
import Index from "../views/index";
import {Navigate} from "react-router-dom";
import { lazy } from "react";


const Home = lazy(()=>import("@/views/home"));
const Exam = lazy(()=>import("@/views/exam"));
const My = lazy(()=>import("@/views/my"));
const Learn = lazy(()=>import("@/views/learn"));
const Login = lazy(()=>import("@/views/login"));
const _404 = lazy(()=>import("@/views/404"));

const RouteMap=[
    {
        path:"/",
        element:<Index/>,
        children:[
            {
                index:true,
                element:<Navigate to="/home"></Navigate>
            },
            {
                path:'/home',
                element:LazyLoad(<Home/>)
            },
            {
                path:"/learn",
                element:LazyLoad(<Learn/>)
            },
            {
                path:"/my",
                element:LazyLoad(<My/>)
            },
        ],
    },
    {
        path:"/exam",
        element:LazyLoad(<Exam/>)
    },
    {
        path:"/login",
        element:LazyLoad(<Login/>)
    },
    {
        path:"*",
        element:LazyLoad(<_404/>)
    },
];

export default RouteMap;