// Notificator.ts

export default interface Notificator {
  sendNotification(message: string): void;
}