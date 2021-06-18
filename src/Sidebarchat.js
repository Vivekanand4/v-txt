import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setChat } from './features/chatSlice';
import "./Sidebarchat.css"

function Siderbarchat({id, chatName}) {
    
    const dispatch= useDispatch();
    //const [chatInfo, setchatinfo] = usestate([]);
    return (
        <div  
        onClick={() => 
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName,
                })
            )
        }
        className='sidebarchat'>
            <Avatar></Avatar>
            <div className="sidebarchat_info">
                <h3>{chatName}</h3>
                <p> </p>
                <small></small>
            </div>
            
        </div>
    )
}

export default Siderbarchat
