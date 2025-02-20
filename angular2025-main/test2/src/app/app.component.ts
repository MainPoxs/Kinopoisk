import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { TopComponent } from './top/top.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-root',
  imports: [RouterOutlet, FilmsComponent, TopComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hello world';
  name = 'Maya';
}
