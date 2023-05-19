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

  handleDelete(event: Event): void {
    const element = event?.target as HTMLButtonElement;
    this.movies = this.movies.filter(
      (item) => item.name !== element.dataset.id
    );
    this.render();
  }

  handleScore(event: Event) {
    const element = event?.target as HTMLButtonElement;
    const movieRated = this.movies.find(
      (item) => item.name === element.dataset.set
    );
    if (!movieRated!.watched) {
      movieRated!.watched = true;
      movieRated!.score = Number(element.dataset.score);
    }

    this.render();
  }

  createTemplate() {
    let series: any[] = this.movies.filter((item) => !item.watched);
    let watchedSeries: any[] = this.movies.filter((item) => item.watched);

    watchedSeries = watchedSeries.map(
      (item) => `
            <li class="serie">
              <img class="serie__poster" src="${item.poster}" alt="${item.name}" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} (${item.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete" data-id="${item.name}"></i>
            </li>`
    );

    series = series.map(
      (item) => `
            <li class="serie">
              <img class="serie__poster" src="${item.poster}" alt="${item.name}" />
              <h4 class="serie__title">${item.name}</h4>
              <p class="serie__info">${item.creator} (${item.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" data-set="${item.name}" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete" data-id="${item.name}"></i>
            </li>`
    );

    return `
          <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have ${series.length} series pending to watch</p>
          <ul class="series-list">${series.join('')}</ul>
          
        </section>
        <section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          <p class="info">You have watched ${watchedSeries.length} series</p>
          <ul class="series-list">${watchedSeries.join('')}</ul>
    `;
  }
}
