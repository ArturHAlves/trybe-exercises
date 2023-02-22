import PropTypes from 'prop-types';
import readicon from '../assets/readicon.svg';
import unreadicon from '../assets/unreadicon.svg';
import { UNREAD, READ } from '../constants';
import '../App.css';

// READ = 1 E UNREAD = 0
function List({ messages, setMessageStatus }) {
  return (
    <ul className="messagens-list">
      {messages.map((message) => {
        const messageClass =
          message.status === READ ? 'message-read' : 'message-unread';

        return (
          <li key={message.id}>
            <p className={`message-title  ${messageClass}`}>{message.title}</p>
            <div>
              <button
                type="button"
                title="Marcar como lida"
                onClick={() => setMessageStatus(message.id, READ)}
              >
                <img src={readicon} alt="Lida" />
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={() => setMessageStatus(message.id, UNREAD)}
              >
                <img src={unreadicon} alt="NãoLida" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessageStatus: PropTypes.func.isRequired,
};

export default List;
