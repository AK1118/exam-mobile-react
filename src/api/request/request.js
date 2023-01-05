import { base } from "antd-mobile/es/locales/base";
import axios from "axios";
import qs from 'qs';
import FastToast from "@/utils/fastToast";
const {CancelToken}=axios;
/*axios请求控制器，用于取消请求 */
// const requestController=new AbortController();
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmOTQyZjc3Ni0zYzQ3LTRkYjQtYjI2Mi1jY2U4YzIyMWQwNjkiLCJ1bmlxdWVfbmFtZSI6IjE3MyoqKioqMzI1IiwidHlwIjoi5bi46Z2S6Jek5aSn6I2v5oi_Iiwic2lkIjoiIiwiaWF0IjoiMTY3MDIyMTg0OCIsIm5iZiI6IjE2NzAyMjE4NDgiLCJleHAiOiIxNjcwMzA4MjQ4IiwiaXNzIjoiTEhaIiwiYXVkIjoiQWxsVXNlciJ9.qk_t7TrHNTULOq47OqWF-XrnnksF-bWbY5mIIY0qHKY';
class RequestUtil{
    /**
     * @description 拼接params
     * @param {Object} params 
     * @returns String 
     */
    addQueryString(params={}){
        let paramsStr="";
        Object.keys(params).forEach((key,ndx)=>{
            paramsStr+=`${key}=${params[key]}&`;
        });
        return paramsStr.substring(0,paramsStr.length-1);
    }
    /**
     * @description 拼接地址和query值
     * @param {String} url 
     * @param {String} baseUrl 
     * @param {Object} params 
     * @returns String
     */
    mergeUrl(url,baseUrl,params){
        const paramsStr=this.addQueryString(params);
        let _url=`${baseUrl}${url}`;
        paramsStr?(_url=`${_url}?${paramsStr}`):{};
        return _url;
    }
    
}

export default class Request{
    static APPLICATION_JSON="application/json";
    static MULTIPART_FORMDATA="multipart/form-data";
    static APPLICATION_X_WWW_FORM_URLENCODED="application/x-www-form-urlencoded";
    constructor(){
        this.util=new RequestUtil();
    }
    config={
        baseUrl:'https://app.ivypha.com',
        headers:{
            'Content-Type':'application/json',
            Authorization1:token,
        },
        dataType:'json',
        responseType:'json',
        timeout:10000,
    };
    interceptor={
        request:(beforeFun,requestErr)=>{
            if(beforeFun)this.requestBeforeFun=beforeFun;
            if(requestErr)this.requestErr=requestErr;
            axios.interceptors.request.use(
                this.beforeFun,
                this.requestErr,
            );
        },
        response:(resFun,errFun)=>{
            if(resFun)this.responseComFun=resFun;
            if(errFun)this.responseComFail=errFun;
            axios.interceptors.response.use(
                this.responseComFun,
                this.responseComFail,
            )
        }
    };
    /**
     * @description 自定义请求拦截器
     * @param {Object} config 
     * @returns {Object}
     */
    requestBeforeFun(config){
        return config;
    }
    /**
     * @description 自定义请求拦截器错误
     * @param {Object} config 
     * @returns {Object}
     */
     requestErr(config){
        return config;
    }
    /**
     * @description 自定义请求成功处理自定义函数占位
     * @param {Response} res 
     * @returns {Response}
     */
    responseComFun(res){
        return res;
    }
    /**
     * @description 自定义请求失败处理自定义函数占位
     * @param {Response} err 
     * @returns {Response}
     */
    responseComFail(err){
        return err;
    }
    /**
     * 
     * @param {String} url 
     * @param {Object} params 
     * @returns Promise
     */
    get({url='',params={}}){
        const options={};
        options.params=params;
        return this.request(
           {
            url,
            method:'GET',
            options
           }
        );
    }
    /**
     * 
     * @param {String} url 
     * @param {Object} data 
     * @param {Object} options 
     * @returns Promise
     */
    post({url='',data={},options={}}){
        options.data=data;
        return this.request(
            {
                url,
                method:'POST',
                options
            }
        );
    }
    request({url='',method="GET",options={}}){
        const {data={},params={},baseUrl=this.config.baseUrl,ContextType=this.APPLICATION_JSON}=options;
        this.config.headers["Content-Type"]=ContextType;
        FastToast.loading();
        return new Promise((resolve,reject)=>{
            axios.request({
                ...this.config,
                url:this.util.mergeUrl(url,baseUrl,params),
                method,
                data,
            }).catch(err=>{
               
            }).then(res=>{
                resolve(res) 
            })
        });
    }
}