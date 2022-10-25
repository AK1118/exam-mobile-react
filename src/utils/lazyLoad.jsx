import { Suspense } from "react";

const LazyLoad=(Components)=>{
    return (
        <Suspense fallback={
            <div>
                ...加载中
            </div>
        }>
           {Components}
        </Suspense>
    );
}

export default LazyLoad;