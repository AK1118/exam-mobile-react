import '@/styles/common.scss';
import { NavBar, Swiper } from 'antd-mobile';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomBar from './components/answers_status';
import BottomFloatingPanel from './components/bottom_floating_panel';
import QuestionBubblesList from './components/question_bubbles';
import QuestionPanel from './components/question_panel';
import questionList from './data';
import './index.scss';
const Exam = () => {
    const navigation = useNavigate();
    const Item = Swiper.Item;
    const itemList = [];
    const [current, setCurrent] = useState(1);
    const swiperRef = useRef();
    const setCurrentFun = useCallback((index) => {
        swiperRef.current.swipeTo(index);
    });
    //默认是不打开底部面板的
    const [isOpenBottomPanel, setOpenBottomPanelValue] = useState(true);

    for (let i = 0; i < questionList.length; i++) {
        const question = questionList[i];
        itemList.push(<Item key={i} className="item">
            <QuestionPanel data={question} index={i} onSelect={(answer) => {
                //选择答案存放
            }}></QuestionPanel>
        </Item>)
    }

    return <div className='page'>
        <NavBar
            className='textcolor'
            onBack={() => {
                navigation(-1)
            }}
        >
            <span className='textcolor'>考试</span>
        </NavBar>
        <div className='swiper-wrapper'>
            <Swiper ref={swiperRef} className="page" indicator={() => { }} onIndexChange={(current) => { setCurrent(current) }}>
                {itemList}
            </Swiper>
        </div>
        <BottomFloatingPanel className="foreground_color" onOpen={(isOpen) => {
            setOpenBottomPanelValue(isOpen);
        }}>
            {/* 答题状态栏 显示已答题数量和未答题数量 */}
            <BottomBar total={itemList.length} current={current}></BottomBar>
            {
                isOpenBottomPanel && <QuestionBubblesList {...{
                    current,
                    questionList,
                    setCurrent: setCurrentFun,
                }}></QuestionBubblesList>
            }
        </BottomFloatingPanel>

    </div>
}





export default Exam;