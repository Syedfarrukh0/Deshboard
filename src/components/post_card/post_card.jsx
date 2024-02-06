'use client'

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useEffect } from "react";

import { Avatar_pri } from "../custom_ui/avatar";
import team_4 from "../../../public/images/team-4.jpg";
import { FaPlus } from "react-icons/fa6";
import { ButtonSec } from "../custom_ui/button";
import { SeparatorPri } from "../custom_ui/separator";
import Image from "next/image";
import post_img from '../../../public/images/post_img_1.jpg' 
import { PostChat } from "../postchat/postchat";

// import Image from "next/image";
import bruce_mars from '../../../public/images/bruce-mars.jpg';

// number of post likes/comments/shares
const no_of_likes_comments_shares = {
    id: 1,
    no_likes: 150,
    no_comments: 36,
    no_shares: 12
}

const login = {
    login_id: 1
}

// comments 
const comments = [
    {
        id: 1,
        profile_image: bruce_mars,
        profile_name: 'Michael Lewis',
        profile_comments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta suscipit et dolores, labore ad Maiores soluta suscipit et dolores, labore ad',
        profile_likes: 150,
        profile_shares: 12,
    },
    {
        id: 2,
        profile_image: bruce_mars,
        profile_name: 'Michael Lewis',
        profile_comments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta suscipit et dolores, labore ad Maiores soluta suscipit et dolores, labore ad',
        profile_likes: 150,
        profile_shares: 12,
    }
];

const PostCard = (props) => {
    // let height_ref = useRef(null);
    // console.log(height_ref.current.offsetHeight);

    // const getDivHeight = () => {
    //     const divElement = document.getElementById('aaa');
    //     if (divElement) {
    //         const height = divElement.offsetHeight;
    //         console.log(height);
    //     }
    // }

    // useEffect(()=>{
    //     getDivHeight();
    // },[])

    return (
        <div className={`post_card_box h-full ${props.class}`} id="aaa">
           
            <Card className={`post_card_wrap w-full`}>

                <CardHeader className='p-3'>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex">
                            <Avatar_pri img={team_4} class='rounded-md cursor-pointer' />
                            <div className="ms-3">
                                <CardTitle className='color_h_pri text-base font-medium cursor-pointer'>John Snow</CardTitle>
                                <CardDescription className='text-sm'>3 days ago</CardDescription>
                            </div>
                        </div>
                        <ButtonSec class='color_h_pri text-sm font-medium hover:translate-x-1 hover:transition' name='Follow' icon={<FaPlus className="me-1 font-light text-xs color_h_pri" />} />
                    </div>
                    <SeparatorPri class={{a:'mx-0', b: 'mb-0'}} />
                </CardHeader>

                <CardContent className='p-3 pt-0'>
                    <p className="color_t_pri py-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae labore vercel Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae labore vercel
                    </p>
                    <Image className="post_image borrder border--red-600 h-[30rem] rounded-xl mt-4 object-cover" src={post_img} alt={post_img} />
                    <PostChat comments={comments} no_of_likes_comments_shares={no_of_likes_comments_shares} setChatareaHeight={props.setChatareaHeight} />
                </CardContent>

            </Card>

        </div>
    );
}

export default PostCard;













// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// edit delete logic
// ////////////////////////////////////////

// export default PostCard;
// const PostCard = (props) => {
//     const [comments, setComments] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddComment = () => {
//     if (inputValue.trim() !== '') {
//       setComments([...comments, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteComment = (index) => {
//     const updatedComments = [...comments];
//     updatedComments.splice(index, 1);
//     setComments(updatedComments);
//   };

//     return (
//         <div className={`post_card_box h-full ${props.class}`}>
//            <div className="post-container">
//       <div className="post-image">
//         <Image src={img} alt="Post" />
//       </div>

//       <div className="post-comments">
//         {comments.length === 0 ? (
//           <div>No comments yet.</div>
//         ) : (
//           comments.map((comment, index) => (
//             <div key={index} className="comment">
//               <span className="comment-text">{comment}</span>
//               <button onClick={() => handleDeleteComment(index)}>Delete</button>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="post-input">
//         <input
//           type="text"
//           placeholder="Add a comment..."
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleAddComment}>Post</button>
//       </div>

//       <style jsx>{`
//         .post-container {
//           max-width: 500px;
//           margin: 0 auto;
//           padding: 20px;
//         }
//         .post-image {
//           margin-bottom: 10px;
//         }
//         .post-image img {
//           width: 100%;
//         }
//         .post-comments {
//           margin-bottom: 10px;
//         }
//         .post-comments .comment {
//           display: flex;
//           align-items: center;
//           margin-bottom: 5px;
//         }
//         .post-comments .comment .comment-text {
//           flex-grow: 1;
//         }
//         .post-comments .comment button {
//           margin-left: 10px;
//         }
//         .post-input {
//           display: flex;
//         }
//         .post-input input {
//           flex-grow: 1;
//           padding: 10px;
//         }
//         .post-input button {
//           padding: 10px 20px;
//           margin-left: 10px;
//         }
//       `}</style>
//     </div>
//         </div>
//     );
// }

// export default PostCard;













// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// edit update delete messages logic
// ////////////////////////////////////////

// import React, { useState } from 'react';

// const PostCard = (props) => {
//     const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (inputValue.trim() !== '') {
//       if (editingIndex !== null) {
//         // Update existing message
//         const updatedMessages = [...messages];
//         updatedMessages[editingIndex] = inputValue;
//         setMessages(updatedMessages);
//         setEditingIndex(null);
//       } else {
//         // Add new message
//         setMessages([...messages, inputValue]);
//       }
//       setInputValue('');
//     }
//   };

//   const handleEditMessage = (index) => {
//     setInputValue(messages[index]);
//     setEditingIndex(index);
//   };

//   const handleDeleteMessage = (index) => {
//     const updatedMessages = [...messages];
//     updatedMessages.splice(index, 1);
//     setMessages(updatedMessages);
//     setEditingIndex(null);
//   };

//   const handleCancelEdit = () => {
//     setInputValue('');
//     setEditingIndex(null);
//   };

//     return (
//         <div className={`post_card_box h-full ${props.class}`}>
//            <div className="chat-container">
//       {messages.length === 0 ? (
//         <div>No messages yet.</div>
//       ) : (
//         messages.map((message, index) => (
//           <div key={index} className="chat-message">
//             <span className="message-text">{message}</span>
//             <div className="message-actions">
//               <button onClick={() => handleEditMessage(index)}>Edit</button>
//               <button onClick={() => handleDeleteMessage(index)}>Delete</button>
//             </div>
//           </div>
//         ))
//       )}

//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         {editingIndex !== null ? (
//           <>
//             <button onClick={handleSendMessage}>Update</button>
//             <button onClick={handleCancelEdit}>Cancel</button>
//           </>
//         ) : (
//           <button onClick={handleSendMessage}>Send</button>
//         )}
//       </div>

//       <style jsx>{`
//         .chat-container {
//           max-width: 500px;
//           margin: 0 auto;
//           padding: 20px;
//         }
//         .chat-message {
//           display: flex;
//           align-items: center;
//           margin-bottom: 10px;
//         }
//         .chat-message .message-text {
//           flex-grow: 1;
//         }
//         .chat-message .message-actions {
//           margin-left: 10px;
//         }
//         .chat-message .message-actions button {
//           margin-right: 5px;
//         }
//         .chat-input {
//           display: flex;
//           margin-top: 20px;
//         }
//         .chat-input input {
//           flex-grow: 1;
//           padding: 10px;
//         }
//         .chat-input button {
//           padding: 10px 20px;
//           margin-left: 10px;
//         }
//       `}</style>
//     </div>
//         </div>
//     );
// }

// export default PostCard;





// import React, { useState } from 'react';

// const Post = () => {
  

//   return (
    
//   );
// };

// export default Post;


// const Chat = () => {
  

//   return (
    
//   );
// };

// export default Chat;