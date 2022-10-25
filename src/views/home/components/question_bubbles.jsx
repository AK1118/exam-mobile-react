//问题回答状态泡泡
const QuestionBubblesList=({questionList,current,setCurrent})=>{
console.log("刷新")
    const bubbleValues=questionList.map((item,index)=>{
        if(index==current)return 'current';
        return item.answered?'selected':'unselect';
    });
    
    //console.log(bubbleValues);
    return <div className="question-bubbleslist-wrapper">
        {
            bubbleValues.map((item,index)=>{
                return <Bubbles key={index} args={
                   {
                        status:item,
                        index:index,
                        action:(index)=>{
                            setCurrent(index);
                            console.log(index);
                        }
                    }
                }></Bubbles>;
            })
        }
    </div>
}

const Bubbles=({args})=>{
    return <div onClick={(e)=>{
        e.preventDefault();
        args.action(args.index)
    }} className="bubble" style={bubbleStyle(args)}>
        {args.index+1}
    </div>
}

const bubbleStyle=(args)=>{
    //下标指向这里
    if(args.status=='current'){
        return {
            'borderColor':'var(--answersed)'
        }
    } 
    //没有选中
    if(args.status=='unselect'){
        return {
            'borderColor':'var(--notanswers)'
        }
    }
    //选中
    if(args.status=='selected'){
        return {
            'border':'none',
            'backgroundColor':'var(--answersed)',
            'color':'#fff',
        }
    }
}

export default QuestionBubblesList;