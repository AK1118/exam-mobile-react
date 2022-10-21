import {FloatingPanel} from 'antd-mobile';
import { createContext, useRef } from 'react';

export const bottomPanelContext=createContext();

const BottomFloatingPanel=({children})=>{

    let fristAnchors=65;
    if(window.innerHeight>1000)fristAnchors=80;
    const anchors=[fristAnchors,window.innerHeight*.6];
    let toggle=false;
    const state={
        ref:useRef(),
        open(){
            this.ref.current.setHeight(anchors[1]);
        },
        close(){
            this.ref.current.setHeight(anchors[0]);
        },
        toggle(){
            toggle=!toggle;
            toggle?this.open():this.close();
        },
    };
    

    return <FloatingPanel ref={state.ref} handleDraggingOfContent={false} anchors={anchors}>
        <bottomPanelContext.Provider value={state}>
            {children}
        </bottomPanelContext.Provider>
    </FloatingPanel>
}



export default BottomFloatingPanel;