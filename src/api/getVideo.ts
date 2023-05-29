import { VideoData } from "../Schemas/Video";
import { requests } from "../utils/requests";
import createObservable from "../utils/rxjs-pipes/createObservable";
import get from "../utils/rxjs-pipes/get";
import transformAxios from "../utils/rxjs-pipes/transformAxios";

export const getVideo = () => {
  return createObservable("videos/view").pipe(
    get<VideoData>(requests),
    transformAxios()
  );
};
