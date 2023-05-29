import { requests } from "../utils/requests";

export async function upload(videoPath: string, description: string) {
  const formData = new FormData();

  formData.append("desc", description);
  formData.append("video", {
    //@ts-ignore
    uri: videoPath,
    type: "video/mp4",
    name: videoPath,
  });

  try {
    const response = await requests.post("videos/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
