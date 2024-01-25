'use client'

// components
import Card from "@/components/card/card";
import Chart from "@/components/chart/chart";
import Slider from "@/components/slider/page";
import MemberCard from "@/components/member_card/member_card";

// icons
import { GrMoney } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import { LiaHandshake } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Todo_Card from "@/components/todo_card/todo_card";
import Progress_Track_Card from "@/components/progress_track_card/progress_track_card";
import PostCard from "@/components/post_card/post_card";
import Project_Track_Card from "@/components/project_track_card/project_track_card";

const Default = () => {

    //  use pb-36 only development
    return (
        <div className="h--screen">
            <div className={`line_1 cards_box mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`}>
                <Card title='TODAYs MONEY' ammount='$53,000' percent_text_color="text-green-400" rev_percent='+55%' past_days='since yesterday' icon={<GrMoney className="text-2xl text-blue-900" />} />
                <Card title="TODAY'S USERS" ammount='2,300' percent_text_color="text-green-400" rev_percent='+3%' past_days='since last week' icon={<PiUsersThreeBold className="text-2xl text-orange-500" />} />
                <Card title='NEW CLIENTS' ammount='+3,462' percent_text_color="text-red-500" rev_percent='-2%' past_days='since last quarter' icon={<LiaHandshake className="text-2xl text-green-900" />} />
                <Card title='SALES' ammount='$103,430' percent_text_color="text-green-400" rev_percent='+5%' past_days='than last month' icon={<HiOutlineShoppingCart className="text-2xl text-green-600" />} />
            </div>
            <div className={`line_2 chart_box h-fit mt-5 grid grid-cols-1 lg:grid-cols-5 gap-x-0 gap-y-5 lg:gap-5`}>
                <Chart class={`col-span-3`} />
                <Slider class={`col-span-2`} />
            </div>
            <div className={`line_3 h-fit mt-5 grid grid-cols-1 sm:grid-cols-8 xl:grid-cols-9 lg: gap-5`}>
                <MemberCard class={`sm:col-span-4 xl:col-span-3`} />
                <Todo_Card class={`sm:col-span-4 xl:col-span-3`} />
                <Progress_Track_Card class={`sm:col-span-full xl:col-span-3`} />
            </div>
            <div className={`line_4 h--[25rem] mt-5 grid xl:grid-cols-12 gap-5`}>
                <PostCard class={`col-span-5`} />
                <div className="border border-red-600 col-span-7 flex flex-col">
                    <Project_Track_Card class={`border border-green-800 sm:col-span-full xl:col-span-3`} />
                    <div className="border border-green-800">

                    </div>
                </div>
            </div>
            <div className="border border-black mt-5 h-44">

            </div>
        </div>
    );
}

export default Default;