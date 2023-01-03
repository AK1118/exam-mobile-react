import styles from "../index.module.scss";
import { SetOutline,AppstoreOutline } from "antd-mobile-icons";
import useChangeTheme from "../../../utils/hooks/useChangeTheme";
import { Modal } from "antd-mobile";


const changeTheme=() => {
    const _useChangeTheme=useChangeTheme();
    Modal.show({
        content:'选择主题',
        closeOnAction:true,
        onAction:(item)=>{
            _useChangeTheme(item.key);
        },
        actions:[
            {
                key:'light',
                text:'白',
            },
            {
                key:'dark',
                text:'黑',
            }
        ],
    });
}


export default function MoreFunction() {
    const items = [
        { label: "设置", icon: <SetOutline />, action: () => { }, },
        { label: "主题", icon: <AppstoreOutline />, action: changeTheme, },
        { label: "设置", icon: <SetOutline />, action: () => { }, },
        { label: "设置", icon: <SetOutline />, action: () => { }, },
        { label: "设置", icon: <SetOutline />, action: () => { }, },
    ];
    
    return <div className={styles.more_function}>
        {
            items.map((item,ndx)=><Item {...item} key={ndx}/>)
        }
    </div>
}



const Item = ({label, icon, action}) => {
    return <span className={styles.more_function_item_wrapper} onClick={action}>
        <span className={styles.more_function_item_icon}>{icon}</span>
        <span className={styles.more_function_item_label}>{label}</span>
    </span>
}