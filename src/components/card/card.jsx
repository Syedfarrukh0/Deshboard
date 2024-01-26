'use client'

const Card = (props) => {
    return (
        <div className="card_wrapper min-h-fit flex">

            <div className="card w-full flex justify-between p-3 rounded-lg">

                <div className="card_content__area space-y-1">
                    <h4 className="text-[0.91rem] text-[#67748e] font-semibold mb-0"> {props.title} </h4>
                    <p className="text-xl font-bold m-0">
                        {props.ammount}
                    </p>
                    <div className="flex items-center pt-2">
                        <span className="text-[0.95rem] text-[#67748e] font-medium text-muted-foreground">
                            <span className={`text-sm font-bold ${props.percent_text_color}`}> {props.rev_percent} </span>
                            {props.past_days}
                        </span>
                    </div>
                </div>

                <div className="icon_div bg-slate-100 h-fit flex justify-center items-center p-4 rounded-[50%]">
                    {props.icon}
                </div>

            </div>

        </div>
    );
}

export default Card;


// //////////////////////////////////////////////
// credit card ui
// /////////////////////////////////////////////   
import { ButtonSec } from "../custom_ui/button";

export function Card_2(props) {

    return (
        <div className="card_wrapper w-full min-h-fit flex overflow-x-auto">

            <div className="w--[22rem] lg: w-full h-56 m-auto bg-red--100 rounded-xl relative text-white shadow-2xl" style={{backgroundImage: `${props.bg_color_gradient}`}}>

                <div className="w-full px-5 absolute top-5">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="font-semibold text-xl">
                                $3,300
                            </h1>
                            <p className="font-normal tracking-widest text-sm">
                                Your current balance
                            </p>
                        </div>
                        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                    </div>
                    <div className="pt-1">
                        <h1 className="font-light">
                           <span className="text-green-500"> + 15% </span> ($250)
                        </h1>
                        {/* <p className="font-medium tracking-more-wider">
                            4642  3489  9867  7632
                        </p> */}
                        <ButtonSec class='bg-[#ffffff59] transition-all w-full mt-2' name='Add credit' />
                    </div>
                    <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                            <div className="">
                                <h1 className="font-light text-xs">
                                    Valid
                                </h1>
                                <p className="font-medium tracking-wider text-sm">
                                    11/15
                                </p>
                            </div>
                            <div className="">
                                <h1 className="font-light text--xs text-xs">
                                    Expiry
                                </h1>
                                <p className="font-medium tracking-wider text-sm">
                                    03/25
                                </p>
                            </div>

                            <div className="">
                                <h1 className="font-light text-xs">
                                    CVV
                                </h1>
                                <p className="font-bold tracking-more-wider text-sm">
                                    ···
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

// //////////////////////////////////////////////
// credit card ui
// /////////////////////////////////////////////   
// import { ButtonSec } from "../custom_ui/button";

export function Card_1(props) {

    return (
        <div className="card_wrapper w-full min-h-fit flex overflow-x-auto">

            <div className="w--[22rem] lg: w-full h-56 m-auto rounded-xl relative text-white shadow-2xl" style={{backgroundImage: `${props.bg_color_gradient}`}}>

                <div className="w-full px-8 absolute top-8">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="font-light">
                                Name
                            </h1>
                            <p className="font-medium tracking-widest">
                                Karthik P
                            </p>
                        </div>
                        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                    </div>
                    <div className="pt-1">
                        <h1 className="font-light">
                            Card Number
                        </h1>
                        <p className="font-medium tracking-more-wider">
                            4642  3489  9867  7632
                        </p>
                        {/* <ButtonSec class='bg-[#ffffff59] transition-all w-full mt-2' name='Add credit' /> */}
                    </div>
                    <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                            <div className="">
                                <h1 className="font-light text-xs">
                                    Valid
                                </h1>
                                <p className="font-medium tracking-wider text-sm">
                                    11/15
                                </p>
                            </div>
                            <div className="">
                                <h1 className="font-light text--xs text-xs">
                                    Expiry
                                </h1>
                                <p className="font-medium tracking-wider text-sm">
                                    03/25
                                </p>
                            </div>

                            <div className="">
                                <h1 className="font-light text-xs">
                                    CVV
                                </h1>
                                <p className="font-bold tracking-more-wider text-sm">
                                    ···
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}