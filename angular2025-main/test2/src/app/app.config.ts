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

import { routes } from './app.routes';
const appRoutes: Routes = [
  { path: '', component: TopComponent },
  { path: 'films', component: FilmsComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient()],
};
