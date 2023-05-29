import createObservable from "../utils/rxjs-pipes/createObservable";
import { requests } from "../utils/requests";
import transformAxios from "../utils/rxjs-pipes/transformAxios";
import { Comment } from "../Schemas/Comment";
import post from "../utils/rxjs-pipes/post";

export default function addComment(id: number, comment: string) {
  return createObservable({ id, comment }).pipe(
    post<Comment>(requests, "/videos/comment"),
    transformAxios()
  );
}
