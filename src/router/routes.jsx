import LazyLoad from "../utils/lazyLoad";
import Exam from "../views/exam";
import Home from "../views/home";
import Index from "../views/index";
import Login from "../views/login";
import {Navigate} from "react-router-dom";
import Learn from "../views/learn";
import My from "../views/my";

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
        element:<Exam></Exam>
    },
    {
        path:"/a",
        element:<Login></Login>
    },
];

export default RouteMap;