import { Toast } from "antd-mobile";
import FastToast from "../fastToast";
import Request from "./request";

const http=new Request();
http.interceptor.request(
    config=>{
       
        console.log("请求拦截")
        return config;
    },
    err=>{
        console.log("请求错误1");
        FastToast.done();
        return err;
    }
);
http.interceptor.response(
    //请求成功
    res=>{
        console.log("请求成功")
        FastToast.done();
        return res.data;
    },
    err=>{
        
        console.log("请求错误2");
        FastToast.done();
        return err;
    }
);


export default http;