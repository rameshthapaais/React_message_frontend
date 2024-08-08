import { useEffect, useState } from "react";

import axios from 'axios';
import { BaseUrl } from "../consistents";

function ChatRoom() {
  const [chatrooms, setChatrooms] = useState([]);
  const [newChatroomName, setNewChatroomName] = useState('');

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: BaseUrl + 'chat/chatroom/',
      headers: {
        'Authorization': 'token d3e8f543f7ac7c114c62b9cf91952119c6e12d15'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setChatrooms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCreateChatroom = (event) => {
    event.preventDefault();

    let data = JSON.stringify({ name: newChatroomName });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: BaseUrl + 'chat/chatroom/',
      headers: {
        'Authorization': 'token d3e8f543f7ac7c114c62b9cf91952119c6e12d15',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setChatrooms([...chatrooms, response.data]);  // Update the state with the new chatroom
        setNewChatroomName('');  // Clear the input field
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <form onSubmit={handleCreateChatroom}>
        <input 
          type="text" 
          value={newChatroomName} 
          onChange={(e) => setNewChatroomName(e.target.value)} 
          placeholder="New Chat Room Name" 
          required 
        />
        
        <p>
        <button id="chat_btn" type="submit">Create Chat Room</button>
        
        </p>
      </form>
      <ul>
        {chatrooms.map((room) => (
          <li id={room.id} key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ChatRoom;