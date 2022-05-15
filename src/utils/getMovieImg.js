import PlaceHolder from "../image-not-found.png";

export function getMovieImg(path,width){
    return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : PlaceHolder;
}