import React, { useEffect, useState } from 'react'
import Message from './Message'
import { IconButton } from '@material-ui/core'
import { MicNone } from '@material-ui/icons'
import './Chat.css'
import { useSelector } from 'react-redux'
import { selectChatId, selectChatName } from '../features/chatSlice'
import db from '../firebase'
import { selectUser } from '../features/userSlice'
import firebase from 'firebase';
import FlipMove from 'react-flip-move'

function Chat() {
    
    const user = useSelector(selectUser)
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const chatName = useSelector(selectChatName);
    const chatId= useSelector(selectChatId);

    useEffect(() => {
        if(chatId){
            db.collection('chats').doc(chatId).collection('message').orderBy("timestamp","desc")
            .onSnapshot(snapshot =>(setMessages(snapshot.docs.map(
                doc => ({
                    id: doc.id,
                    data: doc.data()
                })
            ))));
        }
    })

    const sendMessage = (e) =>{
        e.preventDefault();
        
        db.collection('chats').doc(chatId).collection('message').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photoUrl: user.photoUrl,
            email: user.email,
            displayName: user.displayName
        })
        setInput("");
     
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <h4>To: <span className="chat_chatName">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat_message">
                <FlipMove>
                {
                    messages.map(({id, data}) =>(
                        <Message 
                            key={id} contents={data}/>
                    ))
                }       
                </FlipMove>         
            </div>
            <div className="chat_input">
                <form>
                    <input
                        value={input}
                        placeholder="!Message"
                        type="text"
                        onChange={(e)=> setInput(e.target.value)}
                    />
                    <button onClick= {sendMessage}>Send</button>                    
                </form>
                <IconButton>
                    <MicNone ></MicNone>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
