import { Fish } from "api";

// Keys are used to allow us to assign the same key
// for the same type of request so data can be cached
// with react-query
export const keys = {
  upload: "Upload_Fish",
};

export const upload = (data) => {
  return Fish.post(data);
};
