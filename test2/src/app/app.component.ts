import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { TopComponent } from './top/top.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-root',
  imports: [RouterOutlet, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hello world';
  name = 'Maya';
}
