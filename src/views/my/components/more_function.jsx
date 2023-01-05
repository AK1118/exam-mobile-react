import styles from "../index.module.scss";
import { SetOutline,AppstoreOutline,AaOutline } from "antd-mobile-icons";
import useChangeTheme from "../../../utils/hooks/useChangeTheme";
import { Modal } from "antd-mobile";
import useI18n from "../../../utils/hooks/usei18n";
import useTranslation from "../../../utils/hooks/useTranslation";
import { useContext } from "react";
import { AppContext } from "../../../App";

export default function MoreFunction() {
    /**
     * 切换语言hook
     */
    const _usei18n=useI18n();
    const context=useContext(AppContext);
    /**
     * 切换语言
     */
    const changeLanguage=()=>{
        const _useTranslation=useTranslation();
        Modal.show({
            content:_usei18n('languageDialog.chooseLanguage'),
            closeOnAction:true,
            onAction:(item)=>{
                _useTranslation(item.key,()=>{
                    context.methods.changeLanguage(item.key);
                });
            },
            actions:[
                {
                    key:'zh',
                    text:_usei18n('languageDialog.chinese'),
                },
                {
                    key:'en',
                    text:_usei18n('languageDialog.english'),
                }
            ],
        });
    }
    /**
     * 切换主题
     */
    const changeTheme=() => {
        const _useChangeTheme=useChangeTheme();
        Modal.show({
            content:_usei18n('themeDialog.chooseTheme'),
            closeOnAction:true,
            onAction:(item)=>{
                _useChangeTheme(item.key);
            },
            actions:[
                {
                    key:'light',
                    text:_usei18n('themeDialog.light'),
                },
                {
                    key:'dark',
                    text:_usei18n('themeDialog.dark'),
                }
            ],
        });
    }
    /**
     *单个Item
     */
    const Item = ({label, icon, action}) => {
        return <span className={styles.more_function_item_wrapper} onClick={action}>
            <span className={styles.more_function_item_icon}>{icon}</span>
            <span className={styles.more_function_item_label}>{label}</span>
        </span>
    }
    const items = [
        { label: _usei18n('morefunction.setting'), icon: <SetOutline />, action: () => { }, },
        { label:_usei18n('morefunction.theme'), icon: <AppstoreOutline />, action: changeTheme, },
        { label: _usei18n('morefunction.language'), icon: <AaOutline />, action:()=>{
            //console.log(this);
            changeLanguage();
        }, },
        { label: "设置", icon: <SetOutline />, action: () => { }, },
        { label: "设置", icon: <SetOutline />, action: () => { }, },
    ];
    return <div className={styles.more_function}>
        {
            items.map((item,ndx)=><Item {...item} key={ndx}/>)
        }
    </div>
}
