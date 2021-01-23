import { Avatar, IconButton } from '@material-ui/core';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar                
                    className = "sidebar_avatar"                    
                />
                <div className = "sidebar_input">
                    <SearchIcon 
                        className = "sidebar_searchIcon"
                    />
                    <input placeholder = "search" type = 'text' />
                </div>
                <IconButton 
                    className = "sidebar_inputButton"
                    variant = "outlined">
                        <RateReviewOutlinedIcon />  
                </IconButton>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
