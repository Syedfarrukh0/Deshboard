'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export function AccordionPri(props) {
    // console.log(props.array_sidebar);
    const pathname = usePathname();
    const [activeNav_d1, setactiveNav_d1] = useState('active_side_nav');
    const [activeNav_d2, setactiveNav_d2] = useState('active_side_nav');

    // patren remove sapce between links path        ${array_sidebar_menu.link}/${array_sidebar_menu.name.toLowerCase()}
    const regexPattern = /\s+/g;

    return (
        <Accordion type="single" collapsible className={`w-full px-3`}>

            {
                props.array_sidebar.map((array_sidebar_menu) => (
                    <AccordionItem value={`item-${array_sidebar_menu.id}`} key={array_sidebar_menu.key} className="border-none mb-1">

                        <AccordionTrigger onClick={() => (props.setOpenSidebar(true))}
                            className={`sidebar-button-hover-effect px-2 ${array_sidebar_menu.class} ${pathname.includes(array_sidebar_menu.name.toLowerCase().replace(regexPattern,"")) ? 'active_side_nav' : ''}`}>
                            <Link href={`#`}>
                                <div className="flex justify-center items-center">
                                    <span className="me-3"> {array_sidebar_menu.icon} </span>
                                    <span className={`${props.OpenSidebar !== true ? 'hidden' : 'transition-all delay-300'}`}> {array_sidebar_menu.name} </span>
                                </div>
                            </Link>
                        </AccordionTrigger>

                        <AccordionContent className="accordion ps-7 pb-0">
                            <ul>
                                {
                                    array_sidebar_menu.sub_menu.map((array_sub_side_menu) => (
                                        <div key={array_sub_side_menu.s_key}>

                                            {
                                                array_sidebar_menu.key === array_sub_side_menu.key ?
                                                    (
                                                        <Link onClick={()=>(setactiveNav_d1('active_side_nav'), setactiveNav_d2('off_active_nav'))} href={`${array_sub_side_menu.s_link}/${pathname.includes(array_sidebar_menu.name.toLowerCase()) === true ? array_sidebar_menu.name.toLowerCase().replace(regexPattern,"") : array_sidebar_menu.name.toLowerCase().replace(regexPattern,"") }/${array_sub_side_menu.s_name.toLowerCase().replace(regexPattern,"")}`}>
                                                            {
                                                                props.OpenSidebar === true ?
                                                                    <li className={`${array_sub_side_menu.s_class === 'py-0' ? 'py-0' : 'py-3'} ${pathname.includes(array_sub_side_menu.s_name.toLowerCase().replace(regexPattern,"")) ? `${activeNav_d1}` : ''} sidebar-button-hover-effect px-2 cursor-pointer mt-1`}>
                                                                        {array_sub_side_menu.s_name }
                                                                    </li>
                                                                    : ''
                                                            }
                                                        </Link>
                                                    ) : ''
                                            }

                                            {
                                                props.OpenSidebar === true ?
                                                    <Accordion type="single" collapsible className="w-full">
                                                        {
                                                            array_sub_side_menu.s_sub_menu.map((array_sub_side_menu_dropdown) => (

                                                                array_sidebar_menu.key === array_sub_side_menu.key && array_sub_side_menu.s_key === array_sub_side_menu_dropdown.s_key ?
                                                                    (
                                                                        <AccordionItem value={`item-${array_sub_side_menu_dropdown.s_sub_id}`} key={array_sub_side_menu_dropdown.s_sub_key} className="border-none mt-1">
                                                                            <AccordionTrigger className={`sidebar-button-hover-effect px-2 ${pathname.includes(array_sub_side_menu_dropdown.s_sub_name.toLowerCase().replace(regexPattern,"")) === true ? 'active_side_nav' : ''}`}>
                                                                                <div className="flex justify-center items-center">
                                                                                    <span className="me-3"> {''} </span> {array_sub_side_menu_dropdown.s_sub_name}
                                                                                </div>
                                                                            </AccordionTrigger>
                                                                            <AccordionContent className="accordion ps-7 pb-0">
                                                                                <ul>

                                                                                    {
                                                                                        array_sub_side_menu_dropdown.s_s_sub_menu.map((a_s_s_m_drop_down_2) => (

                                                                                            <Link onClick={()=>(setactiveNav_d1('off_active_nav'), setactiveNav_d2('active_side_nav'))} href={`${array_sub_side_menu.s_link}/${pathname.includes(array_sidebar_menu.name.toLowerCase()) === true ? array_sidebar_menu.name.toLowerCase().replace(regexPattern,"") : array_sidebar_menu.name.toLowerCase().replace(regexPattern,"")}/${array_sub_side_menu_dropdown.s_sub_name.toLowerCase().replace(regexPattern,"")}/${a_s_s_m_drop_down_2.s_s_sub_name.toLowerCase().replace(regexPattern,"")}`} key={a_s_s_m_drop_down_2.s_s_sub_key}>
                                                                                                
                                                                                                <li className={`${a_s_s_m_drop_down_2.s_class === 'py-0' ? 'py-0' : 'py-3'} ${pathname.includes(a_s_s_m_drop_down_2.s_s_sub_name.toLowerCase().replace(regexPattern,"")) ? `${activeNav_d2}` : ''} sidebar-button-hover-effect px-2 mt-1 cursor-pointer`} >
                                                                                                    {a_s_s_m_drop_down_2.s_s_sub_name}
                                                                                                </li>

                                                                                            </Link>

                                                                                        ))
                                                                                    }

                                                                                </ul>
                                                                            </AccordionContent>
                                                                        </AccordionItem>
                                                                    ) : ''

                                                            ))
                                                        }
                                                    </Accordion> 
                                                : ''
                                            }

                                        </div>
                                    ))
                                }
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }

        </Accordion>
    )
}
