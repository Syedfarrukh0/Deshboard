'use client';

// import icons
import { AccordionPri } from "../custom_ui/accordion";
import { SeparatorPri } from "../custom_ui/separator";
import { ButtonPri } from "../custom_ui/button";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandPagekit } from "react-icons/tb";
import { SiAppwrite } from "react-icons/si";
import { LuShoppingBag } from "react-icons/lu";
import { MdLockReset } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
// import images
import Image from "next/image";
import m_icon from "../../../public/images/m_icon.png";
import icon_documentation from "../../../public/images/icon_documentation.svg";
// import script
import Script from "next/script";
// import hooks
import { useRouter } from "next/navigation";
// import framer motion
import { motion } from "framer-motion";



// deshboard tab
const array_sidebar_deshboard_tab = [
    {
        id: '1',  // chnageable
        key: '01', // chnageable
        icon: <IoHomeOutline />,
        name: 'Deshboard',
        class: '',
        link: '/pages',
        sub_menu: [
            {
                key: '01', // dont change use as condition 
                s_id: '01', // changeable
                s_key: '001', // changeable
                s_name: 'Landing',
                s_class: '',
                s_link: `/pages` ,
                s_sub_menu: []
            },
            {
                key: '01', // dont change use as condition
                s_id: '02', // changeable
                s_key: '002', // changeable
                s_name: 'Default',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '01', // dont change use as condition
                s_id: '03', // changeable
                s_key: '003', // changeable
                s_name: 'Automotive',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '01', // dont change use as condition
                s_id: '04', /// changeable
                s_key: '004', // changeable
                s_name: 'Smart Home',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '01', // dont change use as condition
                s_id: '05', // changeable
                s_key: '005', // changeable
                s_name: '',
                s_class: 'py-0',
                s_link: '/pages',
                s_sub_menu: [
                    {
                        key: '01', // dont change use as condition
                        s_key: '005', // dont change use as condition
                        s_sub_id: '001', // changeable
                        s_sub_key: '0001', // changeable
                        s_sub_name: 'Virtual Reality',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '01', // dont change use as condition
                                s_key: '005', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'VR Default',
                                s_s_sub_class: '',
                            },
                            {
                                key: '01', // dont change use as condition
                                s_key: '005', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'VR Info',
                                s_s_sub_class: '',
                            }
                        ]
                    }
                ]

            },
            {
                key: '01', // dont change use as condition
                s_id: '06', /// changeable
                s_key: '006', // changeable
                s_name: 'CRM',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            }
        ]
    },
]

// page tab
const array_sidebar_pages_tab =[
    {
        id: '2',  // chnageable
        key: '02', // chnageable
        icon: <TbBrandPagekit />,
        name: 'Pagess',
        class: '',
        link: '/pages',
        sub_menu: [
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '01', // changeable
                s_key: '001', // changeable
                s_name: '',
                s_class: 'py-0',
                s_link: '/pages',
                s_sub_menu: [
                    {
                        key: '02', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        /////////////////////////////////////////////
                        s_sub_id: '001', // changeable
                        s_sub_key: '0001', // changeable
                        s_sub_name: 'Profile',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                ///////////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Profile Overview',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                //////////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Teams',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                //////////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'All Projects',
                                s_s_sub_class: '',
                            }
                        ]
                    },
                    {
                        key: '02', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        /////////////////////////////////////////////
                        s_sub_id: '002', // changeable
                        s_sub_key: '0002', // changeable
                        s_sub_name: 'Users',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                ///////////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Reports',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                //////////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'New User',
                                s_s_sub_class: '',
                            }
                        ]
                    },
                    {
                        key: '02', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        /////////////////////////////////////////////
                        s_sub_id: '003', // changeable
                        s_sub_key: '0003', // changeable
                        s_sub_name: 'Account',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '02', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0003', // dont change use as condition
                                ///////////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Settings',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0003', // dont change use as condition
                                //////////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Billing',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0003', // dont change use as condition
                                //////////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Invoice',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0003', // dont change use as condition
                                //////////////////////////////////////////////////
                                s_s_sub_id: '0004', // changeable
                                s_s_sub_key: '00004', // changeable
                                s_s_sub_name: 'Security',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '02', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        /////////////////////////////////////////////
                        s_sub_id: '004', // changeable
                        s_sub_key: '0004', // changeable
                        s_sub_name: 'Projects',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '02', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0004', // dont change use as condition
                                ///////////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'General',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0004', // dont change use as condition
                                ///////////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Timeline',
                                s_s_sub_class: '',
                            },
                            {
                                key: '02', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0004', // dont change use as condition
                                ///////////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'New Project',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                ]

            },
            {
                key: '02', // dont change use as condition 
                s_id: '02', // changeable
                s_key: '002', // changeable
                s_name: 'Pricing Page',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition 
                s_id: '03', // changeable
                s_key: '003', // changeable
                s_name: 'RTL',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition 
                s_id: '04', // changeable
                s_key: '004', // changeable
                s_name: 'Widgets',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition 
                s_id: '05', // changeable
                s_key: '005', // changeable
                s_name: 'Charts',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition 
                s_id: '06', // changeable
                s_key: '006', // changeable
                s_name: 'Sweet Alerts',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition 
                s_id: '07', // changeable
                s_key: '007', // changeable
                s_name: 'Notifications',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition 
                s_id: '08', // changeable
                s_key: '008', // changeable
                s_name: 'Chat',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
        ]
    },
]

// application tab
const array_sidebar_application_tab = [
    {
        id: '3',  // chnageable
        key: '03', // chnageable
        icon: <SiAppwrite />,
        name: 'Applications',
        class: '',
        link: '/pages',
        sub_menu: [
            {
                key: '03', // dont change use as condition 
                s_id: '01', // changeable
                s_key: '001', // changeable
                s_name: 'Kanban',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '03', // dont change use as condition
                s_id: '02', // changeable
                s_key: '002', // changeable
                s_name: 'Wizard',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '03', // dont change use as condition
                s_id: '03', // changeable
                s_key: '003', // changeable
                s_name: 'DataTables',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '03', // dont change use as condition
                s_id: '04', /// changeable
                s_key: '004', // changeable
                s_name: 'Calendar',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '03', // dont change use as condition
                s_id: '05', /// changeable
                s_key: '005', // changeable
                s_name: 'Analytics',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
        ]
    },
]

// ecommerce tab
const array_sidebar_ecommerce_tab = [
    {
        id: '4',  // chnageable
        key: '04', // chnageable
        icon: <LuShoppingBag />,
        name: 'Ecommerce',
        class: '',
        link: '/pages',
        sub_menu: [
            {
                key: '04', // dont change use as condition 
                // ///////////////////////////////////////
                s_id: '01', // changeable
                s_key: '001', // changeable
                s_name: 'Overview',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '04', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '02', // changeable
                s_key: '002', // changeable
                s_name: '',
                s_class: 'py-0',
                s_link: '/pages',
                s_sub_menu: [
                    {
                        key: '04', // dont change use as condition
                        s_key: '002', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '001', // changeable
                        s_sub_key: '0001', // changeable
                        s_sub_name: 'Products',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '04', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'New Product',
                                s_s_sub_class: '',
                            },
                            {
                                key: '04', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Edit Product',
                                s_s_sub_class: '',
                            },
                            {
                                key: '04', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Product Page',
                                s_s_sub_class: '',
                            },
                            {
                                key: '04', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0004', // changeable
                                s_s_sub_key: '00004', // changeable
                                s_s_sub_name: 'Products List',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '04', // dont change use as condition
                        s_key: '002', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '002', // changeable
                        s_sub_key: '0002', // changeable
                        s_sub_name: 'Orders',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '04', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Order List',
                                s_s_sub_class: '',
                            },
                            {
                                key: '04', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Order Details',
                                s_s_sub_class: '',
                            },
                        ]
                    }
                ]

            },
            {
                key: '04', // dont change use as condition
                s_id: '04', /// changeable
                s_key: '004', // changeable
                s_name: 'Referral',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            }
        ]
    },
]

// authentication tab
const array_sidebar_authentication_tab = [
    {
        id: '5',  // chnageable
        key: '05', // chnageable
        icon: <MdLockReset />,
        name: 'Authentication',
        class: '',
        link: '/pages',
        sub_menu: [
            {
                key: '05', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '01', // changeable
                s_key: '001', // changeable
                s_name: '',
                s_class: 'py-0',
                s_link: '/pages',
                s_sub_menu: [
                    {
                        key: '05', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '001', // changeable
                        s_sub_key: '0001', // changeable
                        s_sub_name: 'Sign In',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Basic',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Cover',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Illustration',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '05', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '002', // changeable
                        s_sub_key: '0002', // changeable
                        s_sub_name: 'Sign Up',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Basic',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Cover',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Illustration',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '05', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '003', // changeable
                        s_sub_key: '0003', // changeable
                        s_sub_name: 'Reset Password',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0003', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Basic',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0003', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Cover',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0003', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Illustration',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '05', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '004', // changeable
                        s_sub_key: '0004', // changeable
                        s_sub_name: 'Lock',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0004', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Basic',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0004', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Cover',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0004', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Illustration',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '05', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '005', // changeable
                        s_sub_key: '0005', // changeable
                        s_sub_name: '2-Step Verification',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0005', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Basic',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0005', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Cover',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0005', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Illustration',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '05', // dont change use as condition
                        s_key: '001', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '006', // changeable
                        s_sub_key: '0006', // changeable
                        s_sub_name: 'Error',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0006', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Error 404',
                                s_s_sub_class: '',
                            },
                            {
                                key: '05', // dont change use as condition
                                s_key: '001', // dont change use as condition
                                s_sub_key: '0006', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Error 500',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                ]

            },
            {
                key: '04', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '04', /// changeable
                s_key: '004', // changeable
                s_name: 'Referral',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            }
        ]
    },
]

// basic tab
const array_sidebar_basic_tab = [
    {
        id: '1',  // chnageable
        key: '01', // chnageable
        icon: <IoRocketOutline />,
        name: 'Basic',
        class: '',
        link: '/pages',
        sub_menu: [
            {
                key: '01', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '02', // changeable
                s_key: '002', // changeable
                s_name: '',
                s_class: 'py-0',
                s_link: '/pages',
                s_sub_menu: [
                    {
                        key: '01', // dont change use as condition
                        s_key: '002', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '001', // changeable
                        s_sub_key: '0001', // changeable
                        s_sub_name: 'Getting Started',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Quick Start',
                                s_s_sub_class: '',
                            },
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'License',
                                s_s_sub_class: '',
                            },
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Contents',
                                s_s_sub_class: '',
                            },
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0001', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0004', // changeable
                                s_s_sub_key: '00004', // changeable
                                s_s_sub_name: 'Build Tools',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                    {
                        key: '01', // dont change use as condition
                        s_key: '002', // dont change use as condition
                        // //////////////////////////////////////////
                        s_sub_id: '002', // changeable
                        s_sub_key: '0002', // changeable
                        s_sub_name: 'Foundation',
                        s_sub_class: '',
                        s_s_sub_menu: [
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0001', // changeable
                                s_s_sub_key: '00001', // changeable
                                s_s_sub_name: 'Colors',
                                s_s_sub_class: '',
                            },
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0002', // changeable
                                s_s_sub_key: '00002', // changeable
                                s_s_sub_name: 'Grid',
                                s_s_sub_class: '',
                            },
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0003', // changeable
                                s_s_sub_key: '00003', // changeable
                                s_s_sub_name: 'Typography',
                                s_s_sub_class: '',
                            },
                            {
                                key: '01', // dont change use as condition
                                s_key: '002', // dont change use as condition
                                s_sub_key: '0002', // dont change use as condition
                                // ///////////////////////////////////////////////
                                s_s_sub_id: '0004', // changeable
                                s_s_sub_key: '00004', // changeable
                                s_s_sub_name: 'Icons',
                                s_s_sub_class: '',
                            },
                        ]
                    },
                ]

            }
        ]
    },
]

// components tab
const array_sidebar_components_tab = [
    {
        id: '2',  // chnageable
        key: '02', // chnageable
        icon: <SiAppwrite />,
        name: 'Components',
        class: '',
        link: '/pages',
        sub_menu: [
            {
                key: '02', // dont change use as condition 
                // ///////////////////////////////////////
                s_id: '01', // changeable
                s_key: '001', // changeable
                s_name: 'Alerts',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '02', // changeable
                s_key: '002', // changeable
                s_name: 'Badge',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '03', // changeable
                s_key: '003', // changeable
                s_name: 'Buttons',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                s_id: '04', /// changeable
                s_key: '004', // changeable
                s_name: 'Card',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '05', /// changeable
                s_key: '005', // changeable
                s_name: 'Carousel',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '06', /// changeable
                s_key: '006', // changeable
                s_name: 'Collapse',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '07', /// changeable
                s_key: '007', // changeable
                s_name: 'Dropdowns',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '08', /// changeable
                s_key: '008', // changeable
                s_name: 'Forms',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '09', /// changeable
                s_key: '009', // changeable
                s_name: 'Modal',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '10', /// changeable
                s_key: '010', // changeable
                s_name: 'Navs',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '11', /// changeable
                s_key: '011', // changeable
                s_name: 'Navbar',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '12', /// changeable
                s_key: '012', // changeable
                s_name: 'Pagination',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '13', /// changeable
                s_key: '013', // changeable
                s_name: 'Popovers',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '14', /// changeable
                s_key: '014', // changeable
                s_name: 'Progress',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '15', /// changeable
                s_key: '015', // changeable
                s_name: 'Spinners',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '16', /// changeable
                s_key: '016', // changeable
                s_name: 'Tables',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
            {
                key: '02', // dont change use as condition
                // ///////////////////////////////////////
                s_id: '17', /// changeable
                s_key: '017', // changeable
                s_name: 'Tooltips',
                s_class: '',
                s_link: '/pages',
                s_sub_menu: []
            },
        ]
    },
]

// changelog
const array_sidebar_changelog_tab = [
    {
        id: '3',  // chnageable
        key: '03', // chnageable
        icon: <HiBars3CenterLeft />,
        name: 'Changelog',
        class: 'log',
        link: '/pages',
        sub_menu: []
    },
]

// const array_sidebar = [
//     // {
//     //     id: '1',  // chnageable
//     //     key: '01', // chnageable
//     //     icon: <IoHomeOutline />,
//     //     name: 'Deshboard',
//     //     class: '',
//     //     sub_menu: [
//     //         {
//     //             key: '01', // dont change use as condition 
//     //             s_id: '01', // changeable
//     //             s_key: '001', // changeable
//     //             s_name: 'Landing',
//     //             s_class: '',
//     //             // s_Link: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '01', // dont change use as condition
//     //             s_id: '02', // changeable
//     //             s_key: '002', // changeable
//     //             s_name: 'Default',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '01', // dont change use as condition
//     //             s_id: '03', // changeable
//     //             s_key: '003', // changeable
//     //             s_name: 'Automotive',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '01', // dont change use as condition
//     //             s_id: '04', /// changeable
//     //             s_key: '004', // changeable
//     //             s_name: 'Smart Home',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '01', // dont change use as condition
//     //             s_id: '05', // changeable
//     //             s_key: '005', // changeable
//     //             s_name: '',
//     //             s_class: 'py-0',
//     //             s_sub_menu: [
//     //                 {
//     //                     key: '01', // dont change use as condition
//     //                     s_key: '005', // dont change use as condition
//     //                     s_sub_id: '001', // changeable
//     //                     s_sub_key: '0001', // changeable
//     //                     s_sub_name: 'Virtual Reality',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '005', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'VR Default',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '005', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'VR Info',
//     //                             s_s_sub_class: '',
//     //                         }
//     //                     ]
//     //                 }
//     //             ]

//     //         },
//     //         {
//     //             key: '01', // dont change use as condition
//     //             s_id: '06', /// changeable
//     //             s_key: '006', // changeable
//     //             s_name: 'CRM',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         }
//     //     ]
//     // },
//     // {
//     //     id: '2',  // chnageable
//     //     key: '02', // chnageable
//     //     icon: <TbBrandPagekit />,
//     //     name: 'Pages',
//     //     class: '',
//     //     sub_menu: [
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '01', // changeable
//     //             s_key: '001', // changeable
//     //             s_name: '',
//     //             s_class: 'py-0',
//     //             s_sub_menu: [
//     //                 {
//     //                     key: '02', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     /////////////////////////////////////////////
//     //                     s_sub_id: '001', // changeable
//     //                     s_sub_key: '0001', // changeable
//     //                     s_sub_name: 'Profile',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             ///////////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Profile Overview',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             //////////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Teams',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             //////////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'All Projects',
//     //                             s_s_sub_class: '',
//     //                         }
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '02', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     /////////////////////////////////////////////
//     //                     s_sub_id: '002', // changeable
//     //                     s_sub_key: '0002', // changeable
//     //                     s_sub_name: 'Users',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             ///////////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Reports',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             //////////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'New User',
//     //                             s_s_sub_class: '',
//     //                         }
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '02', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     /////////////////////////////////////////////
//     //                     s_sub_id: '003', // changeable
//     //                     s_sub_key: '0003', // changeable
//     //                     s_sub_name: 'Account',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0003', // dont change use as condition
//     //                             ///////////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Settings',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0003', // dont change use as condition
//     //                             //////////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Billing',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0003', // dont change use as condition
//     //                             //////////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Invoice',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0003', // dont change use as condition
//     //                             //////////////////////////////////////////////////
//     //                             s_s_sub_id: '0004', // changeable
//     //                             s_s_sub_key: '00004', // changeable
//     //                             s_s_sub_name: 'Security',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '02', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     /////////////////////////////////////////////
//     //                     s_sub_id: '004', // changeable
//     //                     s_sub_key: '0004', // changeable
//     //                     s_sub_name: 'Projects',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0004', // dont change use as condition
//     //                             ///////////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'General',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0004', // dont change use as condition
//     //                             ///////////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Timeline',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '02', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0004', // dont change use as condition
//     //                             ///////////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'New Project',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //             ]

//     //         },
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             s_id: '02', // changeable
//     //             s_key: '002', // changeable
//     //             s_name: 'Pricing Page',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             s_id: '03', // changeable
//     //             s_key: '003', // changeable
//     //             s_name: 'RTL',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             s_id: '04', // changeable
//     //             s_key: '004', // changeable
//     //             s_name: 'Widgets',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             s_id: '05', // changeable
//     //             s_key: '005', // changeable
//     //             s_name: 'Charts',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             s_id: '06', // changeable
//     //             s_key: '006', // changeable
//     //             s_name: 'Sweet Alerts',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             s_id: '07', // changeable
//     //             s_key: '007', // changeable
//     //             s_name: 'Notifications',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             s_id: '08', // changeable
//     //             s_key: '008', // changeable
//     //             s_name: 'Chat',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //     ]
//     // },
//     // {
//     //     id: '3',  // chnageable
//     //     key: '03', // chnageable
//     //     icon: <SiAppwrite />,
//     //     name: 'Applications',
//     //     class: '',
//     //     sub_menu: [
//     //         {
//     //             key: '03', // dont change use as condition 
//     //             s_id: '01', // changeable
//     //             s_key: '001', // changeable
//     //             s_name: 'Kanban',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '03', // dont change use as condition
//     //             s_id: '02', // changeable
//     //             s_key: '002', // changeable
//     //             s_name: 'Wizard',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '03', // dont change use as condition
//     //             s_id: '03', // changeable
//     //             s_key: '003', // changeable
//     //             s_name: 'DataTables',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '03', // dont change use as condition
//     //             s_id: '04', /// changeable
//     //             s_key: '004', // changeable
//     //             s_name: 'Calendar',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '03', // dont change use as condition
//     //             s_id: '05', /// changeable
//     //             s_key: '005', // changeable
//     //             s_name: 'Analytics',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //     ]
//     // },
//     // {
//     //     id: '4',  // chnageable
//     //     key: '04', // chnageable
//     //     icon: <LuShoppingBag />,
//     //     name: 'Ecommerce',
//     //     class: '',
//     //     sub_menu: [
//     //         {
//     //             key: '04', // dont change use as condition 
//     //             // ///////////////////////////////////////
//     //             s_id: '01', // changeable
//     //             s_key: '001', // changeable
//     //             s_name: 'Overview',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '04', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '02', // changeable
//     //             s_key: '002', // changeable
//     //             s_name: '',
//     //             s_class: 'py-0',
//     //             s_sub_menu: [
//     //                 {
//     //                     key: '04', // dont change use as condition
//     //                     s_key: '002', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '001', // changeable
//     //                     s_sub_key: '0001', // changeable
//     //                     s_sub_name: 'Products',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '04', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'New Product',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '04', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Edit Product',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '04', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Product Page',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '04', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0004', // changeable
//     //                             s_s_sub_key: '00004', // changeable
//     //                             s_s_sub_name: 'Products List',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '04', // dont change use as condition
//     //                     s_key: '002', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '002', // changeable
//     //                     s_sub_key: '0002', // changeable
//     //                     s_sub_name: 'Orders',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '04', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Order List',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '04', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Order Details',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 }
//     //             ]

//     //         },
//     //         {
//     //             key: '04', // dont change use as condition
//     //             s_id: '04', /// changeable
//     //             s_key: '004', // changeable
//     //             s_name: 'Referral',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         }
//     //     ]
//     // },
//     // {
//     //     id: '5',  // chnageable
//     //     key: '05', // chnageable
//     //     icon: <MdLockReset />,
//     //     name: 'Authentication',
//     //     class: '',
//     //     sub_menu: [
//     //         {
//     //             key: '05', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '01', // changeable
//     //             s_key: '001', // changeable
//     //             s_name: '',
//     //             s_class: 'py-0',
//     //             s_sub_menu: [
//     //                 {
//     //                     key: '05', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '001', // changeable
//     //                     s_sub_key: '0001', // changeable
//     //                     s_sub_name: 'Sign In',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Basic',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Cover',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Illustration',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '05', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '002', // changeable
//     //                     s_sub_key: '0002', // changeable
//     //                     s_sub_name: 'Sign Up',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Basic',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Cover',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Illustration',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '05', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '003', // changeable
//     //                     s_sub_key: '0003', // changeable
//     //                     s_sub_name: 'Reset Password',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0003', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Basic',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0003', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Cover',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0003', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Illustration',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '05', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '004', // changeable
//     //                     s_sub_key: '0004', // changeable
//     //                     s_sub_name: 'Lock',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0004', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Basic',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0004', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Cover',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0004', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Illustration',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '05', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '005', // changeable
//     //                     s_sub_key: '0005', // changeable
//     //                     s_sub_name: '2-Step Verification',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0005', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Basic',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0005', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Cover',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0005', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Illustration',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '05', // dont change use as condition
//     //                     s_key: '001', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '006', // changeable
//     //                     s_sub_key: '0006', // changeable
//     //                     s_sub_name: 'Error',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0006', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Error 404',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '05', // dont change use as condition
//     //                             s_key: '001', // dont change use as condition
//     //                             s_sub_key: '0006', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Error 500',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //             ]

//     //         },
//     //         {
//     //             key: '04', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '04', /// changeable
//     //             s_key: '004', // changeable
//     //             s_name: 'Referral',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         }
//     //     ]
//     // },
// ];

// const array_sidebar_docs = [
//     // {
//     //     id: '1',  // chnageable
//     //     key: '01', // chnageable
//     //     icon: <IoRocketOutline />,
//     //     name: 'Basic',
//     //     class: '',
//     //     sub_menu: [
//     //         {
//     //             key: '01', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '02', // changeable
//     //             s_key: '002', // changeable
//     //             s_name: '',
//     //             s_class: 'py-0',
//     //             s_sub_menu: [
//     //                 {
//     //                     key: '01', // dont change use as condition
//     //                     s_key: '002', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '001', // changeable
//     //                     s_sub_key: '0001', // changeable
//     //                     s_sub_name: 'Getting Started',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Quick Start',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'License',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Contents',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0001', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0004', // changeable
//     //                             s_s_sub_key: '00004', // changeable
//     //                             s_s_sub_name: 'Build Tools',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //                 {
//     //                     key: '01', // dont change use as condition
//     //                     s_key: '002', // dont change use as condition
//     //                     // //////////////////////////////////////////
//     //                     s_sub_id: '002', // changeable
//     //                     s_sub_key: '0002', // changeable
//     //                     s_sub_name: 'Foundation',
//     //                     s_sub_class: '',
//     //                     s_s_sub_menu: [
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0001', // changeable
//     //                             s_s_sub_key: '00001', // changeable
//     //                             s_s_sub_name: 'Colors',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0002', // changeable
//     //                             s_s_sub_key: '00002', // changeable
//     //                             s_s_sub_name: 'Grid',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0003', // changeable
//     //                             s_s_sub_key: '00003', // changeable
//     //                             s_s_sub_name: 'Typography',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                         {
//     //                             key: '01', // dont change use as condition
//     //                             s_key: '002', // dont change use as condition
//     //                             s_sub_key: '0002', // dont change use as condition
//     //                             // ///////////////////////////////////////////////
//     //                             s_s_sub_id: '0004', // changeable
//     //                             s_s_sub_key: '00004', // changeable
//     //                             s_s_sub_name: 'Icons',
//     //                             s_s_sub_class: '',
//     //                         },
//     //                     ]
//     //                 },
//     //             ]

//     //         }
//     //     ]
//     // },
//     // {
//     //     id: '2',  // chnageable
//     //     key: '02', // chnageable
//     //     icon: <SiAppwrite />,
//     //     name: 'Components',
//     //     class: '',
//     //     sub_menu: [
//     //         {
//     //             key: '02', // dont change use as condition 
//     //             // ///////////////////////////////////////
//     //             s_id: '01', // changeable
//     //             s_key: '001', // changeable
//     //             s_name: 'Alerts',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '02', // changeable
//     //             s_key: '002', // changeable
//     //             s_name: 'Badge',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '03', // changeable
//     //             s_key: '003', // changeable
//     //             s_name: 'Buttons',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             s_id: '04', /// changeable
//     //             s_key: '004', // changeable
//     //             s_name: 'Card',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '05', /// changeable
//     //             s_key: '005', // changeable
//     //             s_name: 'Carousel',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '06', /// changeable
//     //             s_key: '006', // changeable
//     //             s_name: 'Collapse',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '07', /// changeable
//     //             s_key: '007', // changeable
//     //             s_name: 'Dropdowns',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '08', /// changeable
//     //             s_key: '008', // changeable
//     //             s_name: 'Forms',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '09', /// changeable
//     //             s_key: '009', // changeable
//     //             s_name: 'Modal',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '10', /// changeable
//     //             s_key: '010', // changeable
//     //             s_name: 'Navs',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '11', /// changeable
//     //             s_key: '011', // changeable
//     //             s_name: 'Navbar',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '12', /// changeable
//     //             s_key: '012', // changeable
//     //             s_name: 'Pagination',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '13', /// changeable
//     //             s_key: '013', // changeable
//     //             s_name: 'Popovers',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '14', /// changeable
//     //             s_key: '014', // changeable
//     //             s_name: 'Progress',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '15', /// changeable
//     //             s_key: '015', // changeable
//     //             s_name: 'Spinners',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '16', /// changeable
//     //             s_key: '016', // changeable
//     //             s_name: 'Tables',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //         {
//     //             key: '02', // dont change use as condition
//     //             // ///////////////////////////////////////
//     //             s_id: '17', /// changeable
//     //             s_key: '017', // changeable
//     //             s_name: 'Tooltips',
//     //             s_class: '',
//     //             s_sub_menu: []
//     //         },
//     //     ]
//     // },
//     // {
//     //     id: '3',  // chnageable
//     //     key: '03', // chnageable
//     //     icon: <HiBars3CenterLeft />,
//     //     name: 'Changelog',
//     //     class: 'log',
//     //     sub_menu: []
//     // },
// ];

const variants = {
    open: { width: '100%' },
    closed: { width: '4.75rem' },
}

const mobile_variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    transition: { duration: 3 }
}

const SideBar = (props) => {

    const router = useRouter();

    return (
        <div
            className={`side_bar_wraperr min-w-full md_c:min-w-max h-full flex items-center justify-center ${props.class}`}
            >

            <Script src="/extrnal_sidebar.js" />

            {/* open and close side bar according to screen size to apply variants */}
            <motion.div animate={props.OpenSidebar ? "open" : "closed"} variants={props.winWidth >= props.screen_w_999px ? variants : mobile_variants}
                className={`side_bar_box rounded-2xl w-full h-full overflow-hidden overflow-y-auto`}
            >

                <div className="logo_box w-full h-16 px-2 py-1 flex justify-between items-center">
                    <div className="logo_img min-w-[4rem] h-full">
                        <Image src={m_icon} className="w-full h-full" alt='logo' />
                    </div>
                    <div className={`w-full ${props.OpenSidebar !== true ? 'opacity-0' : 'opacity-100 transition-all delay-300'}`}>
                        <h1 className="text-base font-bold pe-2 text-center transition-all"> Argon Dashboard </h1>
                    </div>
                    {
                        props.winWidth <= props.screen_w_768px ? <FaBarsStaggered className="text-3xl font-bold ms-10 cursor-pointer" onClick={() => (props.setOpenSidebar(false))} /> : ''
                    }

                </div>

                <SeparatorPri class={{a:'mx-3', b: 'mb-3'}} />
                
                {/* ======================= */}
                {/* navbar options */}
                {/* ======================= */}

                {/* deshboard dropdown */}
                <AccordionPri array_sidebar={array_sidebar_deshboard_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />

                {/* pages dropdown */}
                <AccordionPri array_sidebar={array_sidebar_pages_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />
                
                {/* application dropdown */}
                <AccordionPri array_sidebar={array_sidebar_application_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />

                {/* ecommerce dropdown */}
                <AccordionPri array_sidebar={array_sidebar_ecommerce_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />
                
                {/* authentication dropdown */}
                <AccordionPri array_sidebar={array_sidebar_authentication_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />
                
                {/* <AccordionPri class={`px-3`}  array_sidebar={array_sidebar} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} /> */}

                <SeparatorPri class={{a:'mx-3', b: 'mb-0'}} />

                <h6 className="text-xs font-medium py-4 ps-4 text-gray-400"> DOCS </h6>

                {/* basic dropdown */}
                <AccordionPri array_sidebar={array_sidebar_basic_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />

                {/* components dropdown */}
                <AccordionPri array_sidebar={array_sidebar_components_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />

                {/* changelog btn */}
                <AccordionPri array_sidebar={array_sidebar_changelog_tab} OpenSidebar={props.OpenSidebar} setOpenSidebar={props.setOpenSidebar} />

                {
                    props.OpenSidebar === true ?
                        <div className="img_bottom w-full h-fit p-3 flex flex-col justify-center items-center">

                            <Image src={icon_documentation} alt="icon_documentation.svg" className="object-cover w-[8rem]" />
                            <h1 className="text-lg font-semibold">Need help?</h1>
                            <p className="text-xs font-semibold text-gray-500">Please check our docs</p>
                            <ButtonPri name='Documentation' class='bg-[#344767] text-xs leading-3 mt-3 py-4 w-full h-0' onClick={() => (router.push(''))} />

                        </div>
                        : ''
                }

            </motion.div>

        </div>
    );
}

export default SideBar;