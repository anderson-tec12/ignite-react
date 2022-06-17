import axios from "axios";

// https://api.github.com/orgs/rocketseat/repos
export const api = axios.create({
  baseURL: "https://api.github.com",
});
