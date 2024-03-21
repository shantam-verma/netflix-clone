export const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
export const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";
