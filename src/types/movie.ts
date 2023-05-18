/* eslint-disable max-params */
import { movieInfo } from '../data/movieType';

export class Movies implements movieInfo {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;

  static numberOfCreation = 0;

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
    this.id = Movies.increaseCounter();
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.poster = poster;
    this.watched = false;
    this.score = 0;
    this.emmies = emmies;
  }
}
