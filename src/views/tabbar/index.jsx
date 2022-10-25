import { TabBar } from "antd-mobile";
import {useNavigate} from "react-router-dom";


export default ()=>{
    const {Item}=TabBar;
    const navigate=useNavigate();
    const tabs=[
        {
            key:'/home',
            title:'首页'
        },{
            key:'/learn',
            title:'学习'
        },{
            key:'/my',
            title:'我的'
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
                    ></Item>
                })
            }
        </TabBar>
    </div>
}