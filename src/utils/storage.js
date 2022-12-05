class StorageUtil{
    constructor(){

    }
    setItem(key,value){
        localStorage.setItem(key,value);
    }
    getItem(key){
        return localStorage.getItem(key);
    }
    removeItem(key){
        localStorage.removeItem(key);
    }
    clear(){
        localStorage.clear();
    }
    getItemSync(key){
        return Promise((resolve,reject)=>{
            resolve(localStorage.getItem(key));
        });
    }
    setCookie(key,value,time){
        const date=new Date();
        date.setDate(date.getDate()+time);
        document.cookie=key+'='+value+';expires='+date;
    }
    getCookie(key){
        const cookies=document.cookie.split('; ');
        for(let i=0;i<cookies.length;i++){
            const cookie=cookies[i].split('=');
            if(cookie[0]==key){
                return cookie;
            }
        }
    }
    removeCookie(key){
        this.setCookie(key,'',-1);
    }
}

export default new StorageUtil();