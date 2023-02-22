import { READ, UNREAD } from '../Constants';
// READ = 1 , UNDERAD = 0
function List({ messages, setMessageStatus }) {
  return (
    <ul>
      {messages.map((message) => {
        const messageClass =
          message.status === READ ? 'message-read' : 'message-unread';

        return (
          <li
            className={`${messageClass}`}
            key={message.id}
            style={{ listStyle: 'none' }}
          >
            {message.title}
            <button
              title="Marcar lido"
              type="button"
              onClick={() => setMessageStatus(message.id, READ)}
            >
              Marcar como lido
            </button>
            <button
              title="Marcar não lido"
              type="button"
              onClick={() => setMessageStatus(message.id, UNREAD)}
            >
              Marcar como lido
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
