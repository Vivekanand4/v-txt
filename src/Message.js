import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Message.css"

function Message({id, contents: 
    {timestamp, displayName, email, messages, photo, uid},
}) {
     const user = useSelector(selectUser);
    return (
        <div className={`message ${user.email === email && "message__sender"}`} >
           <Avatar className="message__photo" src={photo} ></Avatar>
           <p>{messages}</p> 
           <small>{new Date(timestamp?.toDate()).toUTCString()}  </small>
        </div>
    );
}

export default Message;
