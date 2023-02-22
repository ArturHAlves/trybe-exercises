// import './App.css'
import { useState, useEffect } from 'react';
import Control from './Components/Control';
import List from './Components/List';
import messagesList from './Data/messagesList';
import { READ, UNREAD } from './Constants';

function App() {
  const [messages, setMessages] = useState(messagesList);

  const setMessageStatus = (messageId, newStatus) => {
    const updateMessage = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updateMessage);
  };

  const markAllRead = () => {
    const markAllRead = messages.map((message) => ({
      ...message,
      status: READ,
    }));

    setMessages(markAllRead);
  };

  const markAllUnread = () => {
    const markAllUnread = messages.map((message) => ({
      ...message,
      status: UNREAD,
    }));

    setMessages(markAllUnread);
  };

  useEffect(() => {
    const markAllRead = messages.every((message) => message.status === READ);

    if (markAllRead) {
      alert('Senta no Bugalu');
    }
  }, [messages]);

  return (
    <div>
      <header>
        <h1>TrybMailf</h1>
      </header>
      <Control markAllRead={markAllRead} markAllUnread={markAllUnread} />
      <List messages={messages} setMessageStatus={setMessageStatus} />
    </div>
  );
}

export default App;
