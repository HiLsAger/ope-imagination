import createObservable from "../utils/rxjs-pipes/createObservable";
import { requests } from "../utils/requests";
import transformAxios from "../utils/rxjs-pipes/transformAxios";
import post from "../utils/rxjs-pipes/post";

export default function getAuthKey(username: string, password: string) {
  return createObservable({ username, password }).pipe(
    post<string>(requests, "/login"),
    transformAxios()
  );
}
