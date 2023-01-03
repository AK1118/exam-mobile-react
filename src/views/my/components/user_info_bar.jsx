import styles from "../index.module.scss";

export default function UserInfoBar(){
    return <div className={styles["user_info_bar"]}>
        <div className={styles.image_wrapper}>
            <img src="src/assets/images/tengzi.png"/>
        </div>
        <div className={styles.info_wrapper}>
            <span className={styles.name}>1点都不相信</span>
            <span className={styles.description}>没有任何描述文字可以描述</span>
            <span className={styles.more_info_wrapper}>
                <span className={styles.item}>段位？</span>
                <span className={styles.item}>200分</span>
                <span className={styles.item}>获赞20</span>
            </span>
        </div>
    </div>
}