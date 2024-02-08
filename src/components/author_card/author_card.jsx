'use client'

import { SeparatorPri } from "../custom_ui/separator";
import { Table_Author_Member } from "../custom_ui/table";

const AuthorCard = (props) => {
    return (
        <div className={`member_card h-[21.92rem] overflow-hidden overflow-y-auto rounded-lg ${props.class}`}>
            <Table_Author_Member />
        </div>
    );
}

export default AuthorCard;