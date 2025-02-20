import { Component } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, PercentPipe, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-films',
  imports: [LowerCasePipe,UpperCasePipe,PercentPipe,CurrencyPipe],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {
  name = 'title';
  number = 1000;
  isLogin = false;
  
}
