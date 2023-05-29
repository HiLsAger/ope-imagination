import { Observable } from "rxjs";
import { AxiosInstance, AxiosResponse } from "axios";

export default function get<T>(request: AxiosInstance) {
  return (data: Observable<string>) => {
    return new Observable<AxiosResponse<T>>((sub) => {
      data.subscribe({
        next: (payload) => {
          request
            .get(payload)
            .then((res) => {
              sub.next(res);
              sub.complete();
            })
            .catch((e) => {
              sub.error(e);
            });
        },
        error: (e) => {
          sub.error(e);
        },
      });
    });
  };
}
