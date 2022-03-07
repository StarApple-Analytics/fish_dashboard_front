import { Dashboard} from "api";

// Keys are used to allow us to assign the same key
// for the same type of request so data can be cached
// with react-query
export const keys = {
  fetch: "FETCH_DASHBOARD",
  fetchMeta: "FETCH_DASHBOARD",
};

export const all = () => {
  return Dashboard.all();
};
