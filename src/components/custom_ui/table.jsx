import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


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
import { ButtonPri } from "./button"

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

const project_tracks = [
    {
        id: 1,
        avatar: logo_1,
        budget: '$'+2500,
        name: "React Material Dashboard",
        bg_color: 'bg-blue-700',
        progress: 80,
        dots: <HiDotsVertical />
    },
    {
        id: 2,
        avatar: logo_2,
        budget: '$'+5000,
        work: "Samantha Ivy",
        status: "online",
        name: "Modestic Design System",
        bg_color: 'bg-orange-700',
        progress: 30,
        dots: <HiDotsVertical />
    },
    {
        id: 3,
        avatar: logo_3,
        budget: '$'+2500,
        work: "Samantha Ivy",
        status: "online",
        name: "VueJs Now UI Kit PRO",
        bg_color: 'bg-green-700',
        progress: 100,
        dots: <HiDotsVertical />
    },
    {
        id: 4,
        avatar: logo_4,
        budget: '$'+3400,
        work: "Samantha Ivy",
        status: "online",
        name: "Soft UI Dashboard",
        bg_color: 'bg-purple-700',
        progress: 10,
        dots: <HiDotsVertical />
    },
    // {
    //     id: 5,
    //     avatar: "",
    //     name: "Samantha Ivy",
    //     status: "online",
    //     btn_name: "Add",
    // }
]

export function Table_Project_Track() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"> Project </TableHead>
                    <TableHead> Budget </TableHead>
                    <TableHead> Status </TableHead>
                    <TableHead className=""> Completion </TableHead>
                    <TableHead className=""></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {project_tracks.map((project_track) => (
                    <TableRow key={project_track.id}>
                        <TableCell className="font-medium w-0">{<Avatar_pri img={project_track.avatar} class='rounded-md cursor-pointer' />}</TableCell>
                        <TableCell> {project_track.budget} </TableCell>
                        <TableCell> 
                            <h6 className="text-base font-medium mb-2 cursor-pointer hover:text-blue-700 hover:translate-x-1 transition">{project_track.work}</h6>
                            <small className={`${project_track.status == 'online' ? 'bg-green-300 text-green-900' : project_track.status == 'in meeting' ? 'bg-orange-200 text-orange-900' : project_track.status == 'offline' ? 'bg-red-200 text-red-900' : 'bg-slate-200 text-slate-900'} bg--green-300 py-1 px-2 rounded-sm  font-medium`}>{project_track.status}</small> 
                        </TableCell>
                        <TableCell className="py-0">
                            <h6 className="text-base font-medium mb-2">{project_track.name}</h6>
                            <small className={`w-auto`}> <Progress_bar_pri class={`w-full h-1 ${project_track.bg_color}`} progress={project_track.progress} /> </small>
                        </TableCell>
                        <TableCell> {project_track.dots} </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}