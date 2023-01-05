import { useRef, useState } from "react";
import useI18n from "../../../utils/hooks/usei18n";
import { AppstoreOutline,CheckCircleFill,ExclamationCircleFill} from 'antd-mobile-icons';
// 问题答案类型枚举
const QuestionTypeEnum={
    SINGLE:"single",//单选
    MULTIPLE:"multiple",//多选
    INPUT:"input",//输入简答题
};
const _useI18n=useI18n();
const LABELS='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

// 问题和答案面板
const QuestionPanel=({data,onSelect})=>{
    const {question,answers,answer}=data;
    //题型默认是单选
    let answersType=checkQuestionType(answers,answer);
    return <div className="question-panel">
        <Question question={question} answersType={answersType}></Question>
        <Answers args={{
            answers:answers,
            answersType:answersType,
            onSelect:onSelect,
        }}></Answers>
    </div>
}


const checkQuestionType=(answers,answer)=>{
    if(answers instanceof Array){
        //单选
        if(answers.length>=2){
            //单选
            if(typeof answer =='string')return QuestionTypeEnum.SINGLE;
            //多选
            if(answer instanceof Array)return QuestionTypeEnum.MULTIPLE;
        }else if(answers.length==0){
            return QuestionTypeEnum.INPUT;
        }
    }
    return QuestionTypeEnum.INPUT;
}


// 问题  问题只需要显示一行文字就行
const Question=({question,answersType})=>{
    const label=()=>{
        switch(answersType){
            case QuestionTypeEnum.SINGLE:return _useI18n("exam.singleChoice");
            case QuestionTypeEnum.MULTIPLE:return _useI18n("exam.multipleChoice");
            case QuestionTypeEnum.INPUT:return _useI18n("exam.fillblank");
        }
    }
    return <span className="question-wrapper textcolor">
        <span className="label px mr">{label()}</span>
        {question}</span>
}

// 答案 分为多种 
/**
 * 1.普通单选  选项数量>=2且答案容器类型是字符串
 * 2.多选题，限制数量多选题 选项数量>=2且答案容器类型是数组
 * 3.简答题 选项数量==0且答案容器类型是字符串
 * 4.其他 
*/
const Answers=({args})=>{

    const {answersType,answers,onSelect}=args;
    const [selectList,setSelectList]=useState((new Array(answers.length).fill(false)));
    //选择的答案容器
    const answersOption=useRef(new Set());
    
    //选择题|判断题  判断题无非就是单选题改变文字而已
    const setanswersOption=(index)=>{
        const limit=answersType==QuestionTypeEnum.SINGLE?1:4;
        if(limit==1){
            //单选
            setSelectList([...selectList.map((item,_index)=>_index==index)]);
            answersOption.current.clear();
            answersOption.current.add(LABELS[index]);
        }else{
            //多选
            selectList[index]=!selectList[index];
            const s=selectList[index];
            s?answersOption.current.add(LABELS[index]):answersOption.current.delete(LABELS[index]);
            setSelectList([...selectList]);
            
        }
        console.log(answersOption.current)
    }


    return <div className="answers-wrapper textcolor">
        {answers.map((item,index)=>{
            const label=LABELS[index];
            const isSelect=selectList[index]//false;
            return <Single key={label} text={item} onSelect={(index)=>{
                setanswersOption(index);
            }} 
            order={label}
            isSelected={isSelect}
            index={index}
            ></Single>
        })}
    </div>

}


const Single=({text,onSelect,order='A',isSelected,index})=>{
    // const [isSelected,setIsSelected]=useState(false);
    const select=()=>{
        onSelect(index)
    }
    return <div className="d-flex my-1 a-center">
        <span className="mr" onClick={(e)=>{select()}}>
            {
              <div className="option-icon" style={{background:isSelected?'var(--answersed)':'var(--notanswers)'}}>
                {order}
              </div>  
            }
        </span>
        <span>
           <span onClick={(e)=>{ select()}}>{text}</span>
        </span>
    </div>
}

export default QuestionPanel;