const api="https://api.themoviedb.org/3";

export function get(path){
     return fetch(api+path, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzg2YTdiYTU4MzMzNWZiYjM2MDgyMTVlZDQxMjcyNCIsInN1YiI6IjYyN2FmYTgwNjYzNjI3MDA5YmEyZDIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nwOi9TTtrbkeBABGFFLEyeC_xCgTN99zUIbGG91oE_k",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((result) => result.json());
}