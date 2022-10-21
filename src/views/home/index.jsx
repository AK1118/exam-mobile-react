import '@/styles/common.scss'
import './index.scss'
import { Swiper,Skeleton,FloatingPanel} from 'antd-mobile';
import { useRef, useState } from 'react';
import BottomFloatingPanel from './components/bottom_floating_panel';
import BottomBar from './components/answers_status';
import QuestionPanel from './components/question_panel';
import questionList from './data';

const Home=()=>{
    const Item=Swiper.Item;
    const itemList=[];
    const [current,setCurrent]=useState(1);
   
    for(let i=0;i<questionList.length;i++){
        const question=questionList[i];
        itemList.push(<Item key={i} className="item">
           <QuestionPanel data={question} index={i} onSelect={(answer)=>{
                //选择答案存放
                
           }}></QuestionPanel>
        </Item>)
    }

    return <div className='page'>
                <div className='swiper-wrapper'>
                    <Swiper className="page" indicator={()=>{}} onIndexChange={(current)=>{setCurrent(current+1)}}> 
                        {itemList }
                    </Swiper>
                </div>
                <BottomFloatingPanel>
                    {/* 答题状态栏 显示已答题数量和未答题数量 */}
                    <BottomBar total={itemList.length} current={current}></BottomBar>
                </BottomFloatingPanel>
                
            </div>
}





export default Home;