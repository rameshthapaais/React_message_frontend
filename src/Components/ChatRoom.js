import { useEffect, useState } from "react";

import axios from 'axios';
import { BaseUrl } from "../consistents";

function ChatRoom(){
    const[Chatrooms,setChatroom] = useState([])
    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'chat/chatroom/',
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setChatroom(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    return(
        <div>
            <h1>Chat Room</h1>
            <ul>
                {Chatrooms.map((room)=>(
                    <li key={room.id}>{room.name}</li>
                ))}
            </ul>
        </div>
        )
}

export default ChatRoom;