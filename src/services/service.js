import axios from "axios";

export const postService = async (url, request) => {
  try {
    const res = await axios({
      url,
      method: "POST",
      data: request,
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw error;
  }
};
