import List from './Components/List';
import messagersList from './Data/messageList';
import { useState, useEffect } from 'react';
import './App.css';
import Control from './Components/Control';
import { READ, UNREAD } from './constants';

function App() {
  const [messages, setMessages] = useState(messagersList);

  const setMessageStatus = (messageID, newStatus) => {
    const updateMessage = messages.map((currentMessage) => {
      if (currentMessage.id === messageID) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updateMessage);
  };

  const markAllRead = () => {
    // READ = 1
    const markAllRead = messages.map((message) => ({
      ...message,
      status: READ,
    }));

    setMessages(markAllRead);
  };

  const markAllunread = () => {
    // UNREAD = 0
    const markAllunread = messages.map((message) => ({
      ...message,
      status: UNREAD,
    }));

    setMessages(markAllunread);
  };

  useEffect(() => {
    const markAllRead = messages.every((message) => message.status === READ);

    if (markAllRead) {
      alert('Parábens você leu todas as mensagens');
    }
  }, [messages]);

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <Control markAllRead={markAllRead} markAllUnread={markAllunread} />
      <List messages={messages} setMessageStatus={setMessageStatus} />
    </div>
  );
}

export default App;
