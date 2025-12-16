import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const countTotalLikes = (chatData) =>{
  return chatData.reduce((total, chat) => {
    return total + (chat.liked ? 1 : 0);
  }, 0);
};

const App = () => {
  const[chatData, setChatData] = useState(messages);
  const totalLikes = countTotalLikes(chatData);

  const handleToggleLike = id =>{
    setChatData(chatData => {
      return chatData.map(chat => {
        if(chat.id === id) {
          return ({ ...chat, liked: !chat.liked});
        } else {
          return chat;
        }
      });
    });
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        {
          // <ChatEntry sender = {message1.sender} body = {message1.body} timeStamp = '2018-05-29T22:49:06+00:00' >
          // </ChatEntry>
        /* Wave 01: Render one ChatEntry component
          messages*/
        }
        <ChatLog
          entries = {chatData}
          toggleLike={handleToggleLike}> </ChatLog>
      </main>
    </div>
  );
};

export default App;

