import { of, concatMap, Observable, fromEvent, interval, take } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
result.subscribe((x) => console.log(x));

// const source$ = new Observable((subscriber) => {
//   setTimeout(() => subscriber.next('Can'), 2000);
//   setTimeout(() => subscriber.next('Canan'), 4000);
// });

// source$
//   .pipe(concatMap((value) => of(1, 2)))
//   .subscribe((value) => console.log(value));
