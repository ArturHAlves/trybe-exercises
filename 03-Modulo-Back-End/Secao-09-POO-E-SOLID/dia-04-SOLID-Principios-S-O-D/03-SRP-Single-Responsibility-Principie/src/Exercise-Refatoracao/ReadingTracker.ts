// // ReadingTracker.ts

// import progressNotification from './notifications';

// class ReadingTracker {
//   private readingGoal: number;
//   private booksRead: number;
//   constructor(readingGoal: number) {
//     this.readingGoal = readingGoal;
//     this.booksRead = 0;
//   }

//   trackReadings(readsCount: number): void {
//     this.booksRead += readsCount;
//     if (this.booksRead >= this.readingGoal) {
//       progressNotification(
//         'Congratulations! You ve reached your reading goal!',
//       );
//       return;
//     }
//     progressNotification('There are still some books to go!');
//   }
// }

// const readTracker = new ReadingTracker(20);
// readTracker.trackReadings(12);
// readTracker.trackReadings(9);
