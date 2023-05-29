import { Observable } from "rxjs";
import { AxiosInstance, AxiosResponse } from "axios";

export default function transformAxios<T>() {
  return (data: Observable<AxiosResponse<T>>) => {
    return new Observable<T>((sub) => {
      data.subscribe({
        next: (payload) => {
          sub.next(payload.data);
          sub.complete();
        },
        complete: () => {
          sub.complete();
        },
        error: (e) => {
          sub.error(e);
        },
      });
    });
  };
}
