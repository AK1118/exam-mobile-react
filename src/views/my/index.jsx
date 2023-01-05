import styles from "./index.module.scss";
import UserInfoBar from "./components/user_info_bar";
import MoreFunction from "./components/more_function";
import { createContext } from "react";
import { useState } from "react";

export const MyProvider = createContext();

const My=()=>{
    const [lng,setLng]=useState('zh');
    const state={
        changeLanguage:(lng)=>{
            setLng(lng);
        }
    };
    return <div className={styles.page}>
       <MyProvider.Provider value={state}>
            <UserInfoBar/>
            <MoreFunction/>
       </MyProvider.Provider>
    </div>
}

export default My;