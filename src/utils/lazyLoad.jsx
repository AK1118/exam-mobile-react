import { SpinLoading } from "antd-mobile";
import { Suspense } from "react";
const LazyLoad=(Components)=>{
    return (
        <Suspense fallback={
            <div>
                <SpinLoading></SpinLoading>
            </div>
        }>
           {Components}
        </Suspense>
    );
}


export default LazyLoad;