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
      'https://flxt.tmsimg.com/assets/p9032866_b1t_v8_aa.jpg',
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
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bmOeA.img?w=768&h=432&m=6',
      0
    ),
    new Movie(
      'Amongus',
      'Marquito Sevilla',
      1993,
      'https://cdn1.epicgames.com/salesEvent/salesEvent/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075',
      0
    ),
    new Movie(
      'La Venganza del Asturiano',
      'Nitin Ganwani',
      2021,
      'https://media.licdn.com/dms/image/D4D03AQFGife7JEHbhw/profile-displayphoto-shrink_800_800/0/1675351328921?e=1689811200&v=beta&t=hOj21j8grOMAYA6jM-wO1AAhmm_7N9AK_2SdQfX3zI0',
      400
    ),
    new Movie(
      'The Premaritimal Outcuums',
      'David Ternasky',
      2023,
      'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/254DWZJZNNCZZCLNNFHURL2TPA.jpg',
      2
    ),
  ];
  return movies;
};
