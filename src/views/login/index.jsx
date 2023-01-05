import './index.scss';
import '@/styles/common.scss';
import { Button, Form, Input, NavBar, Toast } from 'antd-mobile';
import { useEffect, useState } from 'react';
import {EyeInvisibleOutline,EyeOutline} from "antd-mobile-icons"
import { useNavigate } from 'react-router-dom';
import useI18n from '../../utils/hooks/usei18n';
const _useI18n=useI18n();
const Login=()=>{
    const {Item}=Form;
    const navigation=useNavigate();
    const [visible,setVisible]=useState(true);
    const [enteringPassword,setEnteringPassword]=useState(false);
    const [account,setAccount]=useState('admin');
    const [password,setPassword]=useState('123456a');
    return <div className='login-page-wrapper'>
            <NavBar className='navbar' title="登录" onBack={()=>{
                        navigation(-1);
                    }}></NavBar>
                <div className="login-page">
                    <div className='form-wrapper'>
                    {
                        enteringPassword||!visible?<img src='src/assets/images/entring.png'></img>:<img src='src/assets/images/notentring.png'></img>
                    }
                    <Form>
                        <Item layout="horizontal" className='foreground_color descriptcolor textcolor' label={_useI18n("login.account")}>
                            <Input 
                                className='textcolor'
                                onChange={(value)=>{
                                    setAccount(value);
                                }}
                                value={account} placeholder={_useI18n("login.accountPlaceholder")}></Input>
                        </Item>
                        <Item layout="horizontal"  className='foreground_color descriptcolor' label={_useI18n("login.password")}
                            extra={
                                <div>
                                    {
                                        visible?<EyeInvisibleOutline
                                            onClick={()=>{setVisible(false)}}
                                        />:<EyeOutline
                                            onClick={()=>{setVisible(true)}}
                                        />
                                        
                                    }
                                </div>
                            }>
                            <Input
                                value={password}
                                onChange={(value)=>{
                                    setPassword(value);
                                }}
                                onBlur={()=>{
                                    setVisible(true);
                                    setEnteringPassword(false);
                                }} onFocus={()=>{
                                    setEnteringPassword(true);
                                }} 
                                placeholder={_useI18n("login.passwordPlaceholder")}
                                type={visible?"password":"text"}
                                clearable
                            ></Input>
                        </Item>
                    </Form>
                    
                    <div onClick={()=>{}} className='forget-password mt-2'>
                        <div>{_useI18n("login.forgetPassword")}</div>
                    </div>
                    <Button className='button mt-2'
                        onClick={()=>{
                            submit(account,password,()=>{
                                navigation('/');
                            },()=>{

                            });
                        }}
                        color='success'>{_useI18n("login.login")}</Button>
                </div>
            </div>
    </div>
}

const submit=(account,password,success,fail)=>{
    //提交表单
    if(!account||!password){
        //校验表单内容
        return Toast.show(
            {
                content:_useI18n("login.empty"),
                duration:1500,
            }
        );
    }
    if(account=='admin'&&password=='123456a'){
        return Toast.show(
            {
                content:_useI18n("login.loginSuccess"),
                duration:1500,
                afterClose:()=>{
                    success();
                }
            }
        );
    }else{
        return Toast.show(
            {
                content:_useI18n("login.wrongAccountOrPassword"),
                duration:1500,
                afterClose:()=>{
                   fail();
                }
            }
        );
    }
}

export default Login;