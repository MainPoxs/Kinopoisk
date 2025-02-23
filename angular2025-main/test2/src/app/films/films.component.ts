import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-films',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
})
export class FilmsComponent implements OnInit {
  posters: any[] = [];
  index: number = 0;
  movies: any[] = [];
  isLoading = true;
  currentPage = 1;
  totalPages = 1;
  pageInput: number = 1;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getKidsMovies();
    this.getKidsBackground();
    setInterval(() => {
      if (this.index > this.posters.length) this.index = 0;
      this.index++;
    }, 3000);
  }
  getKidsMovies(): void {
    this.http
      .get<any>(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=KIDS_ANIMATION_THEME&page=${this.currentPage}`,
        {
          headers: {
            'X-API-KEY': 'b364d279-060d-4ecb-b3a2-de6e94a042ee',
            'Content-Type': 'application/json',
          },
        }
      )
      .subscribe({
        next: (data) => {
          this.movies = data.items;
          console.log(data.items);
          this.totalPages = data.totalPages;
          this.isLoading = false;
          console.log(this.currentPage);
        },
      });
  }
  getKidsBackground(): void {
    this.http
      .get<any>(
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/2361/images?type=COVER&page=1',
        {
          headers: {
            'X-API-KEY': 'b364d279-060d-4ecb-b3a2-de6e94a042ee',
            'Content-Type': 'application/json',
          },
        }
      )
      .subscribe({
        next: (data) => {
          this.posters = data.items;
          console.log(this.posters);
        },
      });
  }

  // Функции для пагинации
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageInput++;
      this.pageInput = this.currentPage;
      this.getKidsMovies();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageInput--;
      this.pageInput = this.currentPage;
      this.getKidsMovies();
    }
  }

  goToPage(): void {
    if (this.pageInput >= 1 && this.pageInput <= this.totalPages) {
      this.currentPage = this.pageInput;

      this.getKidsMovies();
    }
  }
}
