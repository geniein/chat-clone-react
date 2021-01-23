import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h3>Chat Name</h3>
                <p>Messages</p>
                <small>Timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
