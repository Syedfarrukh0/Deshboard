import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { AiOutlineComment, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { SeparatorPri } from "../custom_ui/separator";
import { IoSendOutline } from "react-icons/io5";
import { ButtonSec } from "../custom_ui/button";
import { useState } from "react";

import Image from "next/image";
// import bruce_mars from '../../../public/images/bruce-mars.jpg';


export function PostChat(props) {

    const [id, setId] = useState();
    const handleMouseOver = (e) => {
        setId(e);
    }

    console.log(id);

    const [commentToggler, setCommentToggler] = useState(false);

    const [show, setShow] = useState(false);
    const lineToggle = () => {
        setShow(!show);
    }

    const [PostLike, PostUnLike] = useState(<AiOutlineLike className="text-2xl text-slate-500 hover:animate--bounce cursor-pointer" />);
    const [togglePostLike, setTogglePostLike] = useState(false)
    const showPostLike = () => {
        setTogglePostLike(!togglePostLike);
        if (togglePostLike === true) {
            PostUnLike(<AiFillLike className="text-2xl text-slate-500 hover:animate--bounce cursor-pointer" />)
        } else {
            PostUnLike(<AiOutlineLike className="text-2xl text-slate-500 hover:animate--bounce cursor-pointer" />)
        }
    }

    const [commentLike, commentUnLike] = useState(<AiOutlineLike className="text-2xl text-slate-500 hover:animate--bounce cursor-pointer" />);
    const [toggleLike, setToggleLike] = useState(false)
    const showCommentLike = () => {
        setToggleLike(!toggleLike);
        if (toggleLike === true) {
            commentUnLike(<AiFillLike className="text-2xl text-slate-500 hover:animate--bounce cursor-pointer" />)
        } else {
            commentUnLike(<AiOutlineLike className="text-2xl text-slate-500 hover:animate--bounce cursor-pointer" />)
        }
    }

    const [replayComment, setReplayComment] = useState(true);
    const toggleReplayComment = () => {
        setReplayComment(!replayComment)
    }

    return (
        <Accordion type="single" collapsible className="w-full chat_comments__area">

            <AccordionItem value="item-1" className='border-0'>

                {/* ///////////////////////////////////// */}
                {/* post like share comment area */}
                {/* ///////////////////////////////////// */}
                <div className="flex justify--center items-center gap-2 pt-3">
                    <div className="flex" onClick={showPostLike}>
                        {PostLike}
                        <p className="color_t_pri"> {props.no_of_likes_comments_shares.no_likes} </p>
                    </div>
                    <div className="flex">
                        <AccordionTrigger onClick={()=>setCommentToggler(!commentToggler)} className='chat_down flex-none hover:no-underline'> <span className="cursor-pointer"> <AiOutlineComment className="text-2xl text-slate-500 hover:animate--bounce" /> </span> <span className="ms-[0.1rem] color_t_pri">{props.no_of_likes_comments_shares.no_comments}</span> </AccordionTrigger>
                    </div>
                    <div className="flex">
                        <RiShareForwardLine className="text-2xl text-slate-500 cursor-pointer hover:animate--bounce" />
                        <p className="color_t_pri"> {props.no_of_likes_comments_shares.no_shares} </p>
                    </div>
                </div>

                {/* ////////////////////// */}
                {/* comment text area*/}
                {/* ////////////////////// */}
                <div className={commentToggler === true ? "chat_comments_area" : ''}>
                    {
                        props.comments.map(comment => (
                            <AccordionContent className='pb-1' key={comment.id} onClick={() => handleMouseOver(comment.id)} >
                                {/* <SeparatorPri class={{ a: 'mx-0', b: 'mb-0' }} /> */}
                                <div className="chat_display_area h-fit relative">
                                    <div className="comments h-fit py-2 flex">
                                        <Image className="w-12 h-12 rounded-3xl" src={comment.profile_image} alt={`${comment.profile_image}.jpg`} />
                                        <div className="px-2 ms-1 transition-all">
                                            <h1 className="color_h_pri text-base font-semibold"> {comment.profile_name} </h1>
                                            <p className="comment_text color_t_pri mt-1" onClick={() => lineToggle(comment.id)} style={show === true && id === comment.id ? { display: 'block', WebkitLineClamp: 2, overflow: 'hidden' } : { display: '-webkit-box', WebkitLineClamp: 2, overflow: 'hidden' }}>
                                                {comment.profile_comments}
                                            </p>

                                            <div className="flex items-center mt-2 relative">
                                                <div className="flex items-center absolute top-0" onClick={showCommentLike}>
                                                    {commentLike}
                                                    <p className="color_t_pri">150</p>
                                                </div>

                                                {/* replay comments area */}
                                                <Accordion type="single" collapsible className="w-full border-0 border-orange-800">
                                                    <AccordionItem value="item-1" className='border-0'>
                                                        <AccordionTrigger className='replay_down ms-14 py-0 flex-none'> Reply </AccordionTrigger>
                                                        <AccordionContent className='pb-1 mt-3'>
                                                            <h1 className="color_h_pri text-[0.93rem] font-semibold"> Michael Lewis </h1>
                                                            <p className="comment_text color_t_pri mt-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, overflow: 'hidden' }}>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                                Maiores soluta suscipit et dolores, labore ad
                                                                Maiores soluta suscipit et dolores, labore ad
                                                            </p>
                                                            <div className="flex items-center mt-2">
                                                                <div className="flex items-center">
                                                                    <AiOutlineLike className="text-2xl text-slate-500 hover:animate-bounce cursor-pointer" />
                                                                    <p className="color_t_pri">150</p>
                                                                </div>
                                                                <ButtonSec class='color_h_pri ms-1 py-3 px-2 h-0 text-sm hover:underline font-medium' icon='' name='Replay' />
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <SeparatorPri class={{ a: 'mx-0', b: 'mb-0' }} />
                            </AccordionContent>
                        ))
                    }
                </div>

                {/* ///////////////////// */}
                {/* input text area */}
                {/* ///////////////////// */}
                {/* <SeparatorPri class={{ a: 'my-0', b: 'mb-0' }} /> */}
                <div className="comment_write_area borde-r border--red-700 mt-1 h-fit flex items-center">
                    <Textarea placeholder="Type your message here." className='chat_write h-[2.3rem] border-0 border-b--[0.1rem] focus:border-b-[0.1rem] focus:border-b-blue-800 transition' />
                    <ButtonSec class='hover:animate-pulse hover:text-blue-800' icon={<IoSendOutline className="text-xl color_h_pri" />} />
                </div>
                

            </AccordionItem>
        </Accordion>
    )
}
