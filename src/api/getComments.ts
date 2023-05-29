import { map } from "rxjs";
import createObservable from "../utils/rxjs-pipes/createObservable";
import get from "../utils/rxjs-pipes/get";
import { requests } from "../utils/requests";
import transformAxios from "../utils/rxjs-pipes/transformAxios";
import { Comment } from "../Schemas/Comment";

export default function getComments(id: number) {
  return createObservable(id).pipe(
    map((id) => `/videos/comment/${id}`),
    get<Comment[]>(requests),
    transformAxios()
  );
}
