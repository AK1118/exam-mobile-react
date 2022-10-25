import './index.scss';
import '@/styles/common.scss';
import { Button, Form, Input, NavBar, Toast } from 'antd-mobile';
import { useEffect, useState } from 'react';
import {EyeInvisibleOutline,EyeOutline} from "antd-mobile-icons"
const Login=()=>{
    const {Item}=Form;

    const [visible,setVisible]=useState(true);
    const [enteringPassword,setEnteringPassword]=useState(false);
    const [account,setAccount]=useState('');
    const [password,setPassword]=useState('');


    


    return <div>
                <div className="login-page">
                    <div className='form-wrapper'>
                    {
                        enteringPassword||!visible?<img src='src/assets/images/entring.png'></img>:<img src='src/assets/images/notentring.png'></img>
                    }
                    <Form>
                        <Item layout="horizontal" label="账号">
                            <Input
                                onChange={(value)=>{
                                    setAccount(value);
                                }}
                                value={account} placeholder='请输入账号'></Input>
                        </Item>
                        <Item layout="horizontal" label="密码"
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
                                placeholder='请输入密码' 
                                type={visible?"password":"text"}
                                clearable
                            ></Input>
                        </Item>
                    </Form>
                    
                    <div onClick={()=>{}} className='forget-password mt-2'>
                        <div>忘记密码</div>
                    </div>
                    <Button className='button mt-2'
                        onClick={submit}
                        color='success'>登录</Button>
                </div>
            </div>
    </div>
}

const submit=(account,password)=>{
    //提交表单
    if(!account||!password){
        //校验表单内容
        return Toast.show(
            {
                content:'账号或者密码为空',
                duration:800,
            }
        );
    }
    if(account=='admin'&&password=='123456a'){
        return Toast.show(
            {
                content:'登录成功',
                duration:800,
                afterClose:()=>{
                    console.log("滑滑滑")
                }
            }
        );
    }else{
        return Toast.show(
            {
                content:'账号或者密码错误',
                duration:800,
                afterClose:()=>{
                    console.log("滑滑滑")
                }
            }
        );
    }
}

export default Login;