import { Badge, TabBar } from "antd-mobile";
import {useNavigate} from "react-router-dom";


export default ()=>{
    const {Item}=TabBar;
    const navigate=useNavigate();
    const tabs=[
        {
            key:'/home',
            title:'首页',
            badge:'',
        },
        // {
        //     key:'/learn',
        //     title:'学习',
        //     badge:'',
        // },
        {
            key:'/my',
            title:'我的',
            badge:'',
        }
    ];
    
    const onChangeTab=(key)=>{
        navigate(key,{
            replace:true
        });
    }
    return <div>
        <TabBar onChange={onChangeTab}>
            {
                tabs.map((item)=>{
                    return <Item
                             key={item.key}
                              title={item.title}
                              badge={item.badge}
                            ></Item>
                })
            }
        </TabBar>
    </div>
}