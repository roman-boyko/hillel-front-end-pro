import {convertDate, generateImageUrl, calculatePopularity} from "./utils";

export const renderMovie = ({title, poster_path, popularity, release_date}) => (`
  <div class="movie">
    <img class="poster" src="${generateImageUrl(poster_path)}" alt="${title}" loading="lazy">
    <span class="popularity">
        <span class="rate">rate</span>
        ${calculatePopularity(popularity)}
    </span>
    <span class="title">${title}</span>
    <span class="date">${convertDate(release_date)}</span>
  </div>
`);
