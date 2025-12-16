import './App.css';
import messages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const message1 = {
  id: 1,
  sender: 'Vladimir',
  body: 'why are you arguing with me',
  timeStamp: '2018-05-29T22:49:06+00:00',
  liked: false
};



const App = () => {
  const[chatData, setChatData] = useState(messages);

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
        <h1>Application title</h1>
      </header>
      <main>

        {
          // <ChatEntry sender = {message1.sender} body = {message1.body} timeStamp = '2018-05-29T22:49:06+00:00' >
          // </ChatEntry>
        /* Wave 01: Render one ChatEntry component
          messages
          Wave 02: Render ChatLog component */
          <ChatLog
            entries = {chatData}
            toggleLike={handleToggleLike}> </ChatLog>
        }
      </main>
    </div>
  );
};

export default App;

