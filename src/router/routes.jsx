import Home from "../views/home";
import Login from "../views/login";


const RouteMap=[
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/a",
        element:<Login></Login>
    },
];

export default RouteMap;