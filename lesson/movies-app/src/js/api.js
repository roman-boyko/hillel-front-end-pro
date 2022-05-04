import {generateApiUrl} from './utils';
import {renderMovie} from './templates';

export const getMovies = (path, selector) => {
  fetch(generateApiUrl(path))
    .then(res => res.json())
    .then(({results}) => {
      console.log('results', results)

      const movies = results.map(movie => renderMovie(movie)).join('');

      document.querySelector(selector).insertAdjacentHTML('beforeend', movies);
    });
}
