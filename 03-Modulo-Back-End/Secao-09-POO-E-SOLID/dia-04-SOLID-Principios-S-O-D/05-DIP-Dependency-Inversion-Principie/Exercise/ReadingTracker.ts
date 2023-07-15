// ReadingTracker.ts

// Como a alteração será feita apenas no construtor da classe `ReadingTracker`, o restante do código permanece inalterado.

import ConsoleNotification from './ConsoleNotification';
import Notificator from './Notificator';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  // O construtor deixa de instanciar um novo objeto do tipo Notificator
  // e agora passa a receber ele como parâmetro
  // notificator: Notificator;
  constructor(
    readingGoal: number,
    public notificator: Notificator = new ConsoleNotification('console'),
  ) {
    // this.notificator = new EmailNotification(email);
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
}