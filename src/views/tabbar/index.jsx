import { Badge, TabBar } from "antd-mobile";
import {useNavigate} from "react-router-dom";
import useI18n from "../../utils/hooks/usei18n";

export default ()=>{
    const _usei18n=useI18n();
    const {Item}=TabBar;
    const navigate=useNavigate();
    const tabs=[
        {
            key:'/home',
            title:_usei18n("tabbar.index"),
            badge:'',
        },
        // {
        //     key:'/learn',
        //     title:'学习',
        //     badge:'',
        // },
        {
            key:'/my',
            title:_usei18n("tabbar.my"),
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