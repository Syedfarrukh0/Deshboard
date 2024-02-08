'use client'

import { PiFolderNotchOpenFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";


import { usePathname } from "next/navigation";
import { InputSearch } from "../custom_ui/search";
import { ButtonSec } from "../custom_ui/button";
import { SheetPri } from "../custom_ui/sheet";
import { SeparatorPri } from "../custom_ui/separator";
import { DropdownMenuNotification } from "../custom_ui/dropdown_menu";


const Header = (props) => {
    const pathname = usePathname();

    return (
        <>
            <div className="header_wrap_v01 w-full lg:h-[5.5rem] px-1 fllex justify--between flex--wrap max--[836px]:h-fit grid grid-cols-1 lg:grid-cols-2">

                <div className="left_box_header lg:w-full h-full py-5 lg:py-0 flex items-center justify-between lg:justify-start max--[836px]:w-full max--[836px]:py-2">
                    <div>
                        <span className="flex"> <PiFolderNotchOpenFill className="text-xl text-gray-500" /> <h6 className="text-sm font-semibold text-gray-500"> {pathname} </h6> </span>
                        <h3 className="text-lg font-bold mt-1"> Default </h3>
                    </div>

                    {
                        props.OpenSidebar === true ? <FaBarsStaggered className="text-2xl font-bold ms-10 cursor-pointer" onClick={() => (props.setOpenSidebar(false))} /> : <FaBars className="text-2xl font-bold ms-10 cursor-pointer" onClick={() => (props.setOpenSidebar(true))} />
                    }

                </div>

                <div className="right_box_header lg:w-full h-full pb-5 lg:pb-0 flex justify-between lg:justify-end items-center gap-1 max--[836px]:w-full max--[836px]:py-1 max--[836px]:justify-between">

                    <div className="search_bar_top w-fit h-fit relative flex items-center max-[350px]:hidden">
                        <IoIosSearch className="text-2xl absolute left-2" />
                        <InputSearch class='ps-10 focus:border focus:outline-black' placeholder="Search here..." />
                    </div>
                    <DropdownMenuNotification icon={<IoMdNotificationsOutline className={`m-0 text-xl`} />} />
                    <ButtonSec onClick={() => ('')} class='text-sm font-semibold' icon={<FaRegUser className="me-1 text-base" />} name="Sign In" />
                    <SheetPri icon={<IoSettingsOutline className="m-0 text-xl" />} />

                </div>
               
            </div>
            <SeparatorPri class={{a:'', b: 'm-0'}} />
        </>
    );
}

export default Header;