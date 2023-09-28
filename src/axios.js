import axios from "axios";
import { baseUrl } from "./Constants/Constants";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDNmODA0NTY3MWY4NjFlMzJiNzdhOWVjOTE4MzY5NyIsInN1YiI6IjY1MGQ1OTZmYjViYzIxMDE0ZTkxNzE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0QiQIV59UF0mbGJYRTsuFFgy73-6fLaWAahS8jLIc4",
  },
});

export default instance;