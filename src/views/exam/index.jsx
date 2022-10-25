import '@/styles/common.scss'
import './index.scss'
import { Swiper,Skeleton,FloatingPanel,NavBar} from 'antd-mobile';
import { useCallback, useRef, useState } from 'react';
import BottomFloatingPanel from './components/bottom_floating_panel';
import BottomBar from './components/answers_status';
import QuestionPanel from './components/question_panel';
import questionList from './data';
import QuestionBubblesList from './components/question_bubbles';

const Exam=()=>{
    const Item=Swiper.Item;
    const itemList=[];
    const [current,setCurrent]=useState(1);
    const swiperRef=useRef();
    const setCurrentFun=useCallback((index)=>{
        swiperRef.current.swipeTo(index);
    });
    //默认是不打开底部面板的
    const [isOpenBottomPanel,setOpenBottomPanelValue]=useState(true);

    for(let i=0;i<questionList.length;i++){
        const question=questionList[i];
        itemList.push(<Item key={i} className="item">
           <QuestionPanel data={question} index={i} onSelect={(answer)=>{
                //选择答案存放
           }}></QuestionPanel>
        </Item>)
    }

    return <div className='page'>
                <NavBar 
                    onBack={()=>{
                        console.log("点击返回");
                    }}
                >
                    <span>考试</span>
                </NavBar>
                <div className='swiper-wrapper'>
                    <Swiper ref={swiperRef}  className="page" indicator={()=>{}} onIndexChange={(current)=>{setCurrent(current)}}> 
                        {itemList }
                    </Swiper>
                </div>
                <BottomFloatingPanel onOpen={(isOpen)=>{
                    setOpenBottomPanelValue(isOpen);
                }}>
                    {/* 答题状态栏 显示已答题数量和未答题数量 */}
                    <BottomBar total={itemList.length} current={current}></BottomBar>
                    {
                        isOpenBottomPanel&&<QuestionBubblesList {...{
                            current,
                            questionList,
                            setCurrent:setCurrentFun,
                        }}></QuestionBubblesList>
                    }
                </BottomFloatingPanel>
                
            </div>
}





export default Exam;