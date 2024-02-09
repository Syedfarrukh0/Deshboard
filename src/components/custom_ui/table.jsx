import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


// ////////////////////////////////////
// default table (not use just show)
// ////////////////////////////////////
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export function TableDemo() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}




// ////////////////////////////////////
// custom team table
// ////////////////////////////////////
import { Avatar_pri } from "./avatar"
import { ButtonPri, ButtonSec } from "./button"

import team_1 from "../../../public/images/team-1.jpg";
import team_2 from "../../../public/images/team-2.jpg";
import team_3 from "../../../public/images/team-3.jpg";
import team_4 from "../../../public/images/team-4.jpg";


const team_members = [
    {
        id: 1,
        avatar: team_1,
        name: "John Michael",
        status: "online",
        btn_name: "Add",
    },
    {
        id: 2,
        avatar: team_2,
        name: "Alex Smith",
        status: "in meeting",
        btn_name: "Add",
    },
    {
        id: 3,
        avatar: team_3,
        name: "Samantha Ivy",
        status: "offline",
        btn_name: "Add",
    },
    {
        id: 4,
        avatar: team_4,
        name: "Samantha Ivy",
        status: "online",
        btn_name: "Add",
    },
    // {
    //     id: 5,
    //     avatar: "",
    //     name: "Samantha Ivy",
    //     status: "online",
    //     btn_name: "Add",
    // }
]

export function Table_Team_Member() {
    return (
        <Table className='overflow-hidden'>
            <TableBody className=''>
                {team_members.map((team_member) => (
                    <TableRow key={team_member.id}>
                        <TableCell className="font-medium w-0">{<Avatar_pri img={team_member.avatar} class='rounded-md cursor-pointer' />}</TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-base font-medium mb-2 cursor-pointer hover:text-blue-700 hover:translate-x-1 transition">{team_member.name}</h6>
                            <small className={`${team_member.status == 'online' ? 'bg-green-300 text-green-900' : team_member.status == 'in meeting' ? 'bg-orange-200 text-orange-900' : team_member.status == 'offline' ? 'bg-red-200 text-red-900' : 'bg-slate-200 text-slate-900'} bg--green-300 py-1 px-2 rounded-sm  font-medium`}>{team_member.status}</small>
                        </TableCell>
                        <TableCell className="text-right">
                            {<ButtonPri name={team_member.btn_name} class={`p-[0.5rem]  bg-transparent border border-blue-700 text-blue-700 hover:bg-slate-200`} />}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}




// ////////////////////////////////////
// custom todo list table
// ////////////////////////////////////
import { Checkboxpri } from "./checkbox";
import { Progress_bar_pri } from "./progress_bar"

const todo_lists = [
    {
        id: 1,
        title: "Call with Dave",
        time: "09:30 AM",
    },
    {
        id: 2,
        title: "Brunch Meeting",
        time: "11:00 AM",
    },
    {
        id: 3,
        title: "Modestic Dashboard Launch",
        time: "02:00 PM",
    },
    {
        id: 4,
        title: "Winter Hackaton",
        time: "10:30 AM",
    },
    // {
    //     id: 5,
    //     title: "Winter Hackaton",
    //     time: "10:30 AM",
    // },
]

export function Table_Todo_List() {
    return (
        <Table>
            <TableBody>
                {todo_lists.map((todo_list) => (
                    <TableRow key={todo_list.id}>
                        <TableCell className="py-2">
                            <h6 className="text-base font-medium mb-2 cursor-pointer hover:text-blue-700 hover:translate-x-1 transition">{todo_list.title}</h6>
                            <small className={`bg--green-300 py-1 px-2 rounded-sm font-medium bg-slate-200 text-slate-900`}>{todo_list.time}</small>
                        </TableCell>
                        <TableCell className="text-right">
                            <Checkboxpri class='data-[state=checked]:bg-blue-700 border-blue-700' />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}




// ////////////////////////////////////
// custom progress track table
// ////////////////////////////////////
import logo_1 from "../../../public/images/logo-1.svg";
import logo_2 from "../../../public/images/logo-2.svg";
import logo_3 from "../../../public/images/logo-3.svg";
import logo_4 from "../../../public/images/logo-4.svg";

const progress_tracks = [
    {
        id: 1,
        avatar: logo_1,
        name: "React Material Dashboard",
        bg_color: 'bg-blue-700',
        progress: 80,
    },
    {
        id: 2,
        avatar: logo_2,
        name: "Modestic Design System",
        bg_color: 'bg-orange-700',
        progress: 30,
    },
    {
        id: 3,
        avatar: logo_3,
        name: "VueJs Now UI Kit PRO",
        bg_color: 'bg-green-700',
        progress: 100,
    },
    {
        id: 4,
        avatar: logo_4,
        name: "Soft UI Dashboard",
        bg_color: 'bg-purple-700',
        progress: 10,
    },
    // {
    //     id: 5,
    //     avatar: "",
    //     name: "Samantha Ivy",
    //     status: "online",
    //     btn_name: "Add",
    // }
]

export function Table_Progress_Track() {
    return (
        <Table>
            <TableBody>
                {progress_tracks.map((progress_track) => (
                    <TableRow key={progress_track.id}>
                        <TableCell className="font-medium w-0">{<Avatar_pri img={progress_track.avatar} class='rounded-md cursor-pointer' />}</TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-base font-medium mb-2">{progress_track.name}</h6>
                            <small className={`w-auto`}> <Progress_bar_pri class={`w-full h-1 ${progress_track.bg_color}`} progress={progress_track.progress} /> </small>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

// ////////////////////////////////////
// custom project track table
// ////////////////////////////////////
import { HiDotsVertical } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

const project_tracks = [
    {
        id: 1,
        avatar: logo_1,
        avatar_name: "Jira",
        budget: '$' + 2500,
        work: <GoDotFill />,
        bg_color: 'bg-blue-700',
        status: "working",
        name: "React Material Dashboard",
        progress: 80,
        dots: <HiDotsVertical />
    },
    {
        id: 2,
        avatar: logo_2,
        avatar_name: "Argon",
        budget: '$' + 5000,
        work: <GoDotFill />,
        bg_color: 'bg-orange-700',
        status: "done",
        name: "Modestic Design System",
        progress: 30,
        dots: <HiDotsVertical />
    },
    {
        id: 3,
        avatar: logo_3,
        avatar_name: "Spotify",
        budget: '$' + 2500,
        work: <GoDotFill />,
        bg_color: 'bg-green-700',
        status: "canceled",
        name: "VueJs Now UI Kit PRO",
        progress: 100,
        dots: <HiDotsVertical />
    },
    {
        id: 4,
        avatar: logo_4,
        avatar_name: "Bootstrap",
        budget: '$' + 3400,
        work: <GoDotFill />,
        bg_color: 'bg-purple-700',
        status: "canceled",
        name: "Soft UI Dashboard",
        progress: 10,
        dots: <HiDotsVertical />
    },
    // {
    //     id: 5,
    //     avatar: logo_4,
    //     avatar_name: "Bootstrap",
    //     budget: '$' + 3400,
    //     work: <GoDotFill />,
    //     bg_color: 'bg-purple-700',
    //     status: "canceled",
    //     name: "Soft UI Dashboard",
    //     progress: 10,
    //     dots: <HiDotsVertical />
    // }
]

export function Table_Project_Track() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[140px]"> Project </TableHead>
                    <TableHead className="ps-16 sm:ps-[unset]"> Budget </TableHead>
                    <TableHead> Status </TableHead>
                    <TableHead> Completion </TableHead>
                    <TableHead className='w-[80px]'></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {project_tracks.map((project_track) => (
                    <TableRow key={project_track.id}>
                        <TableCell className="font-medium w-0 flex items-center">{<Avatar_pri img={project_track.avatar} class='rounded-md cursor-pointer me-1' />} <h6>{project_track.avatar_name}</h6> </TableCell>
                        <TableCell className="ps-16 sm:ps-[unset]"> {project_track.budget} </TableCell>
                        <TableCell className="">
                            <div className="h-full flex items-center">
                                <h6 className={`${project_track.status == 'working' ? 'text-sky-500' : project_track.status == 'done' ? 'text-green-500' : project_track.status == 'canceled' ? 'text-red-500' : 'bg--slate-200 text-slate-900'} bg--green-300 py--1 pe-2 rounded-sm font-medium`}>{project_track.work}</h6>
                                <small className={'text-[0.8rem] font-medium'}>{project_track.status}</small>
                            </div>
                        </TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-xs sm:text-base font-medium mb-2">{project_track.name}</h6>
                            <small className={`w-auto`}> <Progress_bar_pri class={`w-full h-1 ${project_track.bg_color}`} progress={project_track.progress} /> </small>
                        </TableCell>
                        <TableCell> <div className='h-full flex items-center justify-center'> {project_track.dots} </div> </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


// ////////////////////////////////////
// custom sales track table
// ////////////////////////////////////
const sale_tracks = [
    {
        id: 1,
        avatar: team_1,
        country: "Country:",
        state: "United States",
        sales: "Sales:",
        amount: '2500',
        value: "Value:",
        val_amt: '$230,900',
        bounce: "Bounce:",
        bounce_amt: '29.9%',
    },
    {
        id: 2,
        avatar: team_2,
        country: "Country:",
        state: "Germany",
        sales: "Sales:",
        amount: '3.900',
        value: "Value:",
        val_amt: '$440,000',
        bounce: "Bounce:",
        bounce_amt: '40.22%',
    },
    {
        id: 3,
        avatar: team_3,
        country: "Country:",
        state: "Great Britain",
        sales: "Sales:",
        amount: '1.400',
        value: "Value:",
        val_amt: '$190,700',
        bounce: "Bounce:",
        bounce_amt: '23.44%',
    },
    {
        id: 4,
        avatar: team_4,
        country: "Country:",
        state: "Brasil",
        sales: "Sales:",
        amount: '562',
        value: "Value:",
        val_amt: '$143,960',
        bounce: "Bounce:",
        bounce_amt: '32.14%',
    },
    {
        id: 5,
        avatar: team_4,
        country: "Country:",
        state: "Brasil",
        sales: "Sales:",
        amount: '562',
        value: "Value:",
        val_amt: '$143,960',
        bounce: "Bounce:",
        bounce_amt: '32.14%',
    },
    {
        id: 6,
        avatar: team_4,
        country: "Country:",
        state: "Brasil",
        sales: "Sales:",
        amount: '562',
        value: "Value:",
        val_amt: '$143,960',
        bounce: "Bounce:",
        bounce_amt: '32.14%',
    },
    {
        id: 7,
        avatar: team_4,
        country: "Country:",
        state: "Brasil",
        sales: "Sales:",
        amount: '562',
        value: "Value:",
        val_amt: '$143,960',
        bounce: "Bounce:",
        bounce_amt: '32.14%',
    }
]

export function Table_Sale_Track() {
    return (
        <Table>
            <TableBody>
                {sale_tracks.map((sale_track) => (
                    <TableRow key={sale_track.id}>
                        <TableCell className="font-medium w-0">{<Avatar_pri img={sale_track.avatar} class='rounded-md cursor-pointer' />}</TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-slate-500 text-xs font-medium mb-1">{sale_track.country}</h6>
                            <small className={`rounded-sm text-[0.85rem] font-semibold`}>{sale_track.state}</small>
                        </TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-slate-500 text-xs font-medium mb-1">{sale_track.sales}</h6>
                            <small className={`rounded-sm text-[0.85rem] font-semibold`}>{sale_track.amount}</small>
                        </TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-slate-500 text-xs font-medium mb-1">{sale_track.value}</h6>
                            <small className={`rounded-sm text-[0.85rem] font-semibold`}>{sale_track.val_amt}</small>
                        </TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-slate-500 text-xs font-medium mb-1">{sale_track.bounce}</h6>
                            <small className={`rounded-sm text-[0.85rem] font-semibold`}>{sale_track.bounce_amt}</small>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


// ////////////////////////////////////
// custom author table
// ////////////////////////////////////
// import { Avatar_pri } from "./avatar"
// import { ButtonPri } from "./button"

// import team_1 from "../../../public/images/team-1.jpg";
// import team_2 from "../../../public/images/team-2.jpg";
// import team_3 from "../../../public/images/team-3.jpg";
// import team_4 from "../../../public/images/team-4.jpg";


const author_members = [
    {
        id: 1,
        avatar: team_1,
        name: "John Michael",
        email: "johnmichael@gmail.com",
        post: "Manager",
        role: "organization",
        status: "Online",
        employed_date: "23/04/18",
        btn: "Edit" 
    },
    {
        id: 2,
        avatar: team_2,
        name: "Alex Smith",
        email: "alexsmith@gmail.com",
        post: "Programator",
        role: "Developer",
        status: "Offline",
        employed_date: "11/01/19",
        btn: "Edit"
    },
    {
        id: 3,
        avatar: team_3,
        name: "Samantha Ivy",
        email: "samanthaivy@gmail.com",
        post: "Executive",
        role: "Projects",
        status: "Online",
        employed_date: "19/09/17",
        btn: "Edit"
    },
    {
        id: 4,
        avatar: team_4,
        name: "Samantha Ivy",
        email: "samanthaivy@gmail.com",
        post: "Programator",
        role: "Developer",
        status: "Online",
        employed_date: "24/12/08",
        btn: "Edit"
    },
    {
        id: 5,
        avatar: team_4,
        name: "Samantha Ivy",
        email: "samanthaivy@gmail.com",
        post: "Programator",
        role: "Developer",
        status: "Online",
        employed_date: "24/12/08",
        btn: "Edit"
    },
]

export function Table_Author_Member() {
    return (
        <Table className='overflow-hidden'>
            <TableHeader>
                <TableRow>
                    <TableHead className=""> Author </TableHead>
                    <TableHead className=""></TableHead>
                    <TableHead className=""> Function </TableHead>
                    <TableHead className=""> Technology </TableHead>
                    <TableHead className=""> Employed </TableHead>
                    <TableHead className=""></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {author_members.map((author_member) => (
                    <TableRow key={author_member.id}>
                        <TableCell className="font-medium w-0">
                            {<Avatar_pri img={author_member.avatar} class='rounded-md cursor-pointer' />}
                            </TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-base font-medium cursor-pointer hover:text-blue-700 hover:translate-x-1 transition">{author_member.name}</h6>
                            <small className={` text-slate-500 rounded-sm text-sm font-medium`}>{author_member.email}</small>
                        </TableCell>
                        <TableCell>
                            <h6 className="text-base font-medium">{author_member.post}</h6>
                            <small className={` text-slate-500 rounded-sm text-sm font-medium`}>{author_member.role}</small>
                        </TableCell>
                        <TableCell>
                            <small className={`${author_member.status == 'Online' ? 'bg-green-300 text-green-900' : author_member.status == 'in meeting' ? 'bg-orange-200 text-orange-900' : author_member.status == 'Offline' ? 'bg-red-200 text-red-900' : 'bg-slate-200 text-slate-900'} bg--green-300 py-1 px-2 rounded-sm font-medium ms-3`}>{author_member.status}</small>
                        </TableCell>
                        <TableCell>
                            <h6 className="text-sm text-slate-900 font-medium ms-1">{author_member.employed_date}</h6>
                        </TableCell>
                        <TableCell>
                                <h6 className="text-sm text-slate-900 ms-1 cursor-pointer font-semibold hover:underline hover:text-blue-700 transition">{author_member.btn}</h6>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


// ////////////////////////////////////
// custom category table
// ////////////////////////////////////
// import { Avatar_pri } from "./avatar"
// import { ButtonPri } from "./button"
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { GoInbox } from "react-icons/go";
import { HiOutlineEmojiHappy } from "react-icons/hi";

// import team_1 from "../../../public/images/team-1.jpg";
// import team_2 from "../../../public/images/team-2.jpg";
// import team_3 from "../../../public/images/team-3.jpg";
// import team_4 from "../../../public/images/team-4.jpg";


const categories = [
    {
        id: 1,
        icon: <HiOutlineDeviceMobile className="text-white" />,
        name: "Devices",
        status: "250 in stock, 346+ sold",
        btn: <MdOutlineKeyboardArrowRight />,
    },
    {
        id: 2,
        icon: <IoTicketOutline className="text-white" />,
        name: "Tickets",
        status: "123 closed, 15 open",
        btn: <MdOutlineKeyboardArrowRight />,
    },
    {
        id: 3,
        icon: <GoInbox className="text-white" />,
        name: "Error logs",
        status: "1 is active, 40 closed",
        btn: <MdOutlineKeyboardArrowRight />,
    },
    {
        id: 4,
        icon: <HiOutlineEmojiHappy className="text-white" />,
        name: "Happy users",
        status: "+ 430",
        btn: <MdOutlineKeyboardArrowRight />,
    }
]

export function Table_Category() {
    return (
        <Table className='overflow-hidden'>
            <TableBody className=''>
                {categories.map((category) => (
                    <TableRow key={category.id}>
                        <TableCell className="font-medium w-0"><div className="bg-black p-2 rounded-[40%]">{category.icon}</div></TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-base font-medium">{category.name}</h6>
                            <small className={`text-slate-500 rounded-sm font-medium`}>{category.status}</small>
                        </TableCell>
                        <TableCell className="text-right">
                            {<ButtonSec name={''} icon={category.btn} class={`p-[0.5rem] bg-transparent w-10 h-10 rounded-[50%] text-lg transition-all hover:translate-x-1 hover:bg-slate-200`} />}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}