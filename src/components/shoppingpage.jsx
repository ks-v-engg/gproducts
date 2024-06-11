import React from "react";
import Products from "./products";
import Topnavbar from "./topnavbar";
import Productfilter from "./producfilter";

const Shoppingpage = () => {
    return <div >
    <div className="mx-auto" >
       <Topnavbar />
       </div>
        <div className="flex mt-2">
            <div className="w-[200px]">
                <Productfilter />
            </div>
            <div>
                <Products />
            </div>
        </div>
    </div>
}

export default Shoppingpage;