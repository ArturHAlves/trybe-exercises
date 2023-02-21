function Control({ markAllRead, markAllUnread }) {
  return (
    <div>
      <button title="Marcar todas como lida" onClick={markAllRead}>
        Marcar todas como lida
      </button>
      <button title="Marcar todas como não lida" onClick={markAllUnread}>
        Marcar todas como não lida
      </button>
    </div>
  );
}

export default Control;
