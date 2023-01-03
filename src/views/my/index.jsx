import styles from "./index.module.scss";
import UserInfoBar from "./components/user_info_bar";
import MoreFunction from "./components/more_function";
export default ()=>{
    return <div className={styles.page}>
        <UserInfoBar/>
        <MoreFunction/>
    </div>
}