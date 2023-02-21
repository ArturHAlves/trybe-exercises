import readicon from '../assets/readicon.svg';
import unreadicon from '../assets/unreadicon.svg';

function Control({ markAllRead, markAllUnread }) {
  return (
    <div>
      <button
        type="button"
        title="Marcar todas como lida"
        onClick={markAllRead}
      >
        <img src={readicon} alt="Marcar como todos lido" />
        Marcar todos como lidos
      </button>
      <button
        type="button"
        title="Marcar todas como não lida"
        onClick={markAllUnread}
      >
        <img src={unreadicon} alt="Marcar como todos não lido" />
        Marcar todos como não lidos
      </button>
    </div>
  );
}

export default Control;
