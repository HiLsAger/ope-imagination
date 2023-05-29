import { Observable } from "rxjs";

export default function createObservable<T>(data?: T) {
  return new Observable<T>((sub) => {
    sub.next(data);
    sub.complete();
  });
}
