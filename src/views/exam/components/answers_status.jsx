import { AppstoreOutline,CheckCircleFill,ExclamationCircleFill} from 'antd-mobile-icons';
import { useContext } from 'react';
import BottomFloatingPanel, { bottomPanelContext } from './bottom_floating_panel';
import useI18n from '../../../utils/hooks/usei18n';

// 答题状态
const AnswersStatus=()=>{
    const _useI18n=useI18n();
    const context=useContext(bottomPanelContext);
    return <div className='answers-status' onClick={(e)=>{
        e.preventDefault();
        context.toggle();
    }}>
        <span><CheckCircleFill color='var(--answersed)' className='mx'/>{_useI18n("exam.answered")}</span>
        <span className='mx-1'></span>
        <span><ExclamationCircleFill color='var(--notanswers)'  className='mx'/>{_useI18n("exam.unanswered")}</span>
    </div>
}

// 自定义选择器
const CustomIndiCator=({total,current})=>{
    const context=useContext(bottomPanelContext);
    return <div className='custom-indicator'  onClick={(e)=>{
                e.preventDefault();
                context.toggle();
            }}>
                    <AppstoreOutline className='mr'/>
                    <span className='current'>{(current+1).toString().padStart(2,'0')}</span>
                    <span>/</span>
                    <span>{total.toString().padStart(2,'0')}</span>
           </div>
}


// 答题状态栏
const BottomBar=({children,total,current})=>{
    return <div className='bottom-bar'>
    <div className='flex-1 d-flex j-center'>
        <AnswersStatus/>
    </div>
    <CustomIndiCator total={total} current={current}/>
 </div>
}

export default BottomBar;
