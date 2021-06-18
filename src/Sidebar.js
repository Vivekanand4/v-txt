import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import SearchIcon from '@material-ui/icons/Search';
import { RateReviewOutlined } from '@material-ui/icons';
import Siderbarchat from './Sidebarchat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
import { setChat } from "./features/chatSlice"

function Sidebar() {

    const user = useSelector(selectUser);
    const [chat, setChat] = useState([])


    useEffect(() => {
        db.collection('chats').onSnapshot((snapshot) => setChat(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ));
    },[]);


    const addChat=() => {


        const chatName= prompt('please enter a chat name');

      if (chatName){
        db.collection('chats').add({
            chatName: chatName,
        });
    }
    };


    return (
        <div className="sidebar">
            <div className="sidebar__header">
              <Avatar  onClick={() => auth.signOut()} 
              src={user.photo}
              className="sidebar__avatar"    />
              <div className="sidebar__input">
                < SearchIcon></SearchIcon>
                  <input placeholder="search"></input>
              </div>
              <IconButton  varriant="outlined" className="sidebar__inputbuttom">
                  <RateReviewOutlined  onClick={addChat} ></RateReviewOutlined>
              </IconButton>
            </div>

            <div className="sidebar__chat">
                {chat.map(({id, data: {chatName} }) => 
                (<Siderbarchat key={id} id={id} chatName={chatName}     />
                ))}
                
            </div>
            
        </div>
    )
};

export default Sidebar
