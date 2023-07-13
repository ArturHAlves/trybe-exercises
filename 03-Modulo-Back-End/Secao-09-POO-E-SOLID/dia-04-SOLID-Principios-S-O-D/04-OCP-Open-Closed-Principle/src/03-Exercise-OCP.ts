type Notification = { type: string, send: (message: string) => void };

// Criando variáveis para guardar cada tipo aceito por nossa função
const consoleNotification: Notification = {
  type: 'Console',
  send: (message) => console.log('Console: ', message),
};

const emailNotification: Notification = {
  type: 'Email',
  send: (message) => console.log('Email: ', message),
};

const phoneNotification: Notification = {
  type: 'Phone',
  send: (message) => console.log('Phone: ', message),
};

const notifications: Notification[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
];

// Agora podemos adicionar novos tipos sem modificar nossa função
export default function progressNotification(
  message: string,
  type_ = 'Console',
  notificationsArray: Notification[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.send(message);
    }
  });
}