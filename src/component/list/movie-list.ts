/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { generateMovieList } from '../../data/generateMovies';
import { Movie } from '../../types/movie';
import { Component } from '../source/component';

export class MovieList extends Component {
  movies: Movie[];
  constructor(selector: string) {
    super(selector);
    this.movies = generateMovieList();
    this.render();
  }

  createTemplate() {
    const list = this.movies
      .map(
        (item) => `
            <li class="serie">
              <img class="serie__poster" src="${item.poster}" alt="${item.name}" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} (${item.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>`
      )
      .join('');

    return `
    <ul class="series-list">${list}</ul>
    `;
  }
}
