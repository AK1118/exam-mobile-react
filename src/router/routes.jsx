import Exam from "../views/exam";
import Home from "../views/home";
import Login from "../views/login";


const RouteMap=[
    {
        path:"/",
        element:<Exam></Exam>
    },
    {
        path:"/a",
        element:<Login></Login>
    },
];

export default RouteMap;