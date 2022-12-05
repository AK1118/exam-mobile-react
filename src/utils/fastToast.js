import { Toast } from "antd-mobile";
export default class FastToast{
    /**
     * @description 普通显示
     * @param {*} param0 
     */
    static show({content,duration=2000}){
        Toast.show(
            {
                content,
                duration,
            }
        );
    }
    static loading(){
        this.toast_handler=Toast.show({
            icon:'loading',
            duration:0,
        })
    }
    static done(){
        if(this.toast_handler)this.toast_handler.close();
    }
}
