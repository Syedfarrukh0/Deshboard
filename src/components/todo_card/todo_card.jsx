'use client'

import { SeparatorPri } from "../custom_ui/separator";
import { Table_Todo_List } from "../custom_ui/table";

const Todo_Card = (props) => {
    return (
        <div className={`todo_card h-[21.92rem] overflow-hidden overflow-y-auto rounded-lg ${props.class}`}>
            <div className="sticky top-0 z-10 bg-white">
                <h1 className="text-xl font-semibold text-[#344767] p-3 py-4">To Do List</h1>
                <SeparatorPri class={{a:'mx-3', b: 'mb-0'}} />
            </div>
           <Table_Todo_List /> 
        </div>
    );
}

export default Todo_Card;