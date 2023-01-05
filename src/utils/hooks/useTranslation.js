import i18next from "i18next";

export default function useTranslation(){
    return (lng,callback)=>{
        i18next.changeLanguage(lng,callback);
    }
}