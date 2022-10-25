import '@/styles/common.scss'
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import Tabbar from '../tabbar';
import './index.scss'
const Home=()=>{
   const navigator = useNavigate();
   return <div>
      <Button onClick={()=>{
            navigator('/exam');
      }} color="primary">考试</Button>
   </div>
}


export default Home;