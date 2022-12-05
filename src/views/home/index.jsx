import '@/styles/common.scss'
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import Tabbar from '../tabbar';
import http from '../../utils/request/http';
import './index.scss'
const Home=()=>{
   const navigator = useNavigate();
   return <div>
      <Button onClick={()=>{
            navigator('/exam');
      }} color="primary">考试</Button>
       <Button onClick={()=>{
            navigator('/login');
      }} color="primary">登录</Button>
      <Button color='primary' onClick={()=>{
         http.get({
            url:'/Product/GetRecommendProduct',
            // options:{
            //    ContextType:Request.MULTIPART_FORMDATA,
            // },
         }).then(res=>console.log(res));
      }}>测试</Button>
   </div>
}


export default Home;