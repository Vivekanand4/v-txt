import { IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./Chat.css"
import MicIcon from '@material-ui/icons/Mic';
import Message from './Message';
import {  useDispatch, useSelector } from 'react-redux';
import { selectChatId, selectChatName } from './features/chatSlice';
import db from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { setChat } from "./features/chatSlice";



function Chat() {
    
    const user = useSelector( selectUser );
    const [input, setInput] = useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        if (chatId) {
            db.collection("chats").doc(chatId)
            .collection("messages").orderBy('timestamp', 'desc').onSnapshot(snapshot => 
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
          )
        }
    }, [chatId]);

    const sendMessage = (e) => {
        e.preventDefault();
    
        db.collection("chats").doc(chatId).collection("messages").add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          messages: input,
          uid: user.uid,
          email: user.email,
          photo: user.photo,
        });
    
        setInput("");
      };



    return (
        <div className="chat">
            {/*header*/}
            <div className="chat__header">
                <h4>To: <span className="chat__name">  {chatName} </span></h4>
                <strong>Details</strong>
            </div>


            {/*chat txt*/}
            <div className="chat__message">

              {messages.map(({ id, data}) => (
                  <Message key={id} contents={data}/>
              ))}

            </div>

            {/*chat input*/}
            <div className="chat__input">
            <form>
              <input
                value={input}
            
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${chatName}`}
             />
          <button
           
            className="chat__inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
             
             
             
            
             <IconButton>
             <MicIcon className="chat__name"></MicIcon>
             </IconButton>
            </div>
            
        </div>
    )
}

export default Chat;
