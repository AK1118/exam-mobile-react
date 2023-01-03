export default function useChangeTheme(){
    return (themeName)=>{
        if(document){
            /*没有设置主题的时候默认设置主题为light */
           if(!document.body.getAttribute("theme-data")){
                document.body.setAttribute("theme-data",'light');
           }else{
                document.body.setAttribute("theme-data",themeName);
           }
        }
    }
}