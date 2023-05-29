import { Observable } from "rxjs";
import { AxiosInstance, AxiosResponse } from "axios";

export default function get<T, V extends object | undefined = {}>(
  request: AxiosInstance,
  url: string
) {
  return (data: Observable<V>) => {
    return new Observable<AxiosResponse<T>>((sub) => {
      data.subscribe({
        next: (payload) => {
          request
            .post(url, payload)
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
