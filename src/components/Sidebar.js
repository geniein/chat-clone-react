import { Avatar, IconButton, Snackbar } from '@material-ui/core';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db, { auth } from '../firebase'

function Sidebar() {
    const user =useSelector(selectUser);
    const [chats, setChats] = useState([])
    useEffect(() =>{
        db.collection('chats').onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    const addChat = () =>{
        const chatName = prompt('Please Enter a chat name');
        if(chatName) {
            db.collection('chats').add({
                chatName: chatName,

            })
        }
    }
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar
                    src={user.photoUrl}
                    className="sidebar_avatar"
                    onClick={()=> auth.signOut}
                />
                <div className="sidebar_input">
                    <SearchIcon 
                        className="sidebar_searchIcon"
                    />
                    <input placeholder = "search" type = 'text' />
                </div>
                <IconButton 
                    className="sidebar_inputButton"
                    variant="outlined">
                        <RateReviewOutlinedIcon 
                            onClick={addChat}/>  
                </IconButton>
            </div>
            <div className="sidebar_chats">
                {
                    chats.map(({id, data: {chatName}})=> (
                        <SidebarChat
                            key={id}
                            id={id}
                            chatName={chatName}/>
                    ))
                }                
            </div>
        </div>
    )
}

export default Sidebar
