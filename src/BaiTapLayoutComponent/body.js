import React from "react";
import Banner from "./banner";
import Item from "./item";
function Body() {
    return (
        <div >
            <div className="container">

                <Banner />
                <div className="row">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>


    )
}

export default Body;

