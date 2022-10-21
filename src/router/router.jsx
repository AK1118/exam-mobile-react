import { useCallback } from "react";
import {useRoutes} from 'react-router-dom'
import RouteMap from "./routes";
const Routes=()=>{
    const routes=useRoutes(RouteMap);
    return routes;
}

export default Routes;