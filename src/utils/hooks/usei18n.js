import i18next from "i18next";

export default function useI18n(){
    return (key)=>{
        return i18next.t(key);
    }
}