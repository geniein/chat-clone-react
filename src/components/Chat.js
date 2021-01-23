import React from 'react'
import Message from './Message'
import { IconButton } from '@material-ui/core'
import { MicNone } from '@material-ui/icons'
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_chatName">Name</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat_message">
                <Message />
            </div>
            <div className="chat_input">
                <form>
                    <input
                        placeholder="!Message"
                        type="text"
                    />
                    <button>Send</button>                    
                </form>
                <IconButton>
                    <MicNone ></MicNone>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
