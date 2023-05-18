import { generateMovieList } from '../../data/generateMovies';
import { Movie } from '../../types/movie';
import { Component } from '../source/component';

export class MovieList extends Component {
  movies: Movie[];
  constructor(selector: string) {
    super(selector);
    this.movies = generateMovieList();
    this.template = this.createTemplate();
    this.render();
  }

  render(): void {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
    this.element.querySelectorAll('.fa-star').forEach((item) => {
      item.addEventListener('click', this.handleScore.bind(this));
    });

    this.element.querySelectorAll('.fa-times-circle').forEach((item) => {
      item.addEventListener('click', this.handleDelete.bind(this));
    });
  }

  handleDelete() {
    const element = event.target as HTMLElement;
    this.movies = this.movies.filter(
      (item) => item.name !== element.dataset.id
    );
    this.render();
  }

  handleScore() {
    console.log(true);
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
              <i class="fas fa-times-circle icon--delete" data-id="${item.name}"></i>
            </li>`
      )
      .join('');

    return `
    <ul class="series-list">${list}</ul>
    `;
  }
}
