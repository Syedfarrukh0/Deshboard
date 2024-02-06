'use client'

import { SeparatorPri } from "../custom_ui/separator";
import { Table_Sale_Track } from "../custom_ui/table";
import { useEffect } from "react";

const Sale_Track_Card = (props) => {

    // const getDivHeight = () => {
    //     const divElement = document.getElementById('bbb');
    //     if (divElement) {
    //         const height = divElement.offsetHeight;
    //         console.log(height);
    //     }
    // }

    // useEffect(()=>{
    //     getDivHeight();
    // },[])

    return (
        <div className={`progress_track_card h--[27.9rem] h--[12rem] ${props.chatarea_height} max-h--[30rem] h--full overflow-hidden overflow-y-auto rounded-lg ${props.class}`} id="bbb">
            <div className="sticky top-0 z-10 bg-white">
                <h1 className="text-xl font-semibold text-[#344767] p-3 py-3"> Sales by Country </h1>
                <SeparatorPri class={{a:'mx-3', b: 'mb-0'}} />
            </div>
           <Table_Sale_Track />
        </div>
    );
}

export default Sale_Track_Card;