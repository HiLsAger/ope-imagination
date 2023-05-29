import { catchError, map } from "rxjs";
import { requests } from "../utils/requests";
import createObservable from "../utils/rxjs-pipes/createObservable";
import get from "../utils/rxjs-pipes/get";
import transformAxios from "../utils/rxjs-pipes/transformAxios";
import { VideoData } from "../Schemas/Video";

export default function getRandomVideos(count: number) {
  return createObservable(count).pipe(
    map((count) => `/videos/random/${count}`),
    get<VideoData[]>(requests),
    transformAxios()
  );
}
