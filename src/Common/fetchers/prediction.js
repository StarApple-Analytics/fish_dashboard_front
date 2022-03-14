import { Prediction } from "api";

// Keys are used to allow us to assign the same key
// for the same type of request so data can be cached
// with react-query
export const keys = {
  predict: "GET_PREDICTION",
};

export const predict = (data) => {
  return Prediction.post(data);
};
