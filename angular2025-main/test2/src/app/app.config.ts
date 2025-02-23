import {
  ApplicationConfig,
  Component,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TopComponent } from './top/top.component';
import { FilmsComponent } from './films/films.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';

import { routes } from './app.routes';
const appRoutes: Routes = [
  { path: '', component: TopComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'film/:id', component: DetailFilmComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient()],
};
