import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message() {
    return (
        <div className="message">
            <Avatar className="message_photo" />
            <p>Message.js</p>
            <small>Timestamp</small>
        </div>
    )
}

export default Message
