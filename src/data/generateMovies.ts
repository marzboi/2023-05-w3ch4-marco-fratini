import { Movie } from '../types/movie';

export const generateMovieList = () => {
  const movies = [
    new Movie(
      'The Sopranos',
      'David Chase',
      1999,
      'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      21
    ),
    new Movie(
      'Game of Thrones',
      'David Benioff D. B. Weiss',
      2011,
      'https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==',
      164
    ),
    new Movie(
      'Mad Men',
      'Matthew Weiner',
      2007,
      'https://pics.filmaffinity.com/Mad_Men_Serie_de_TV-351490728-large.jpg',
      116
    ),
    new Movie(
      '6 feet under',
      'Alan Ball',
      2001,
      'https://www.cine.com/media/series/2711.jpg',
      53
    ),
    new Movie(
      'Atypical',
      'Robia Rashid',
      2017,
      'https://www.cine.com/media/series/2711.jpg',
      0
    ),
  ];
  return movies;
};
