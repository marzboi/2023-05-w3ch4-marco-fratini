/* eslint-disable no-new */
import { Header } from './component/header/header';
import { MovieList } from './component/list/movie-list';
import { Main } from './component/main/main';
import './styles.css';

new Header('.container', `Marco's Movies`);
new Main('.container');
new MovieList('.main');
