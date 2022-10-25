/**
 * main容器
 */
import Home from "../home";
import Tabbar from "../tabbar";
import {Outlet} from 'react-router-dom'
import "./index.scss"
const Index=({children})=>{
    return <div className="main-wrapper">
        <div className="body">
            <Outlet></Outlet>
        </div>
        <div className="bottom">
            <Tabbar></Tabbar>
        </div>
    </div>
}

export default Index;