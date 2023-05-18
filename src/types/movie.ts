/* eslint-disable max-params */
import { movieInfo } from './movieType';

export class Movie implements movieInfo {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;

  static numberOfCreation = 1;

  static increaseCounter() {
    return this.numberOfCreation++;
  }

  constructor(
    name: string,
    creator: string,
    year: number,
    poster: string,
    emmies: number
  ) {
    this.id = Movie.increaseCounter();
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.poster = poster;
    this.watched = false;
    this.score = 0;
    this.emmies = emmies;
  }
}
