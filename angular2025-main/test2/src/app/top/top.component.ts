import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent implements OnInit {
  posters: any[] = [];
  index: number = 0;
  movies: any[] = [];
  isLoading = true;
  currentPage = 1;
  totalPages = 1;
  pageInput: number = 1;
  selecetedGenre = '';
  genres: string[] = [];
  filteredMovies: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getTopMovies();
    this.getTopBackground();
    setInterval(() => {
      if (this.index > this.posters.length) this.index = 0;
      this.index++;
    }, 3000);
  }
  getTopMovies(): void {
    this.http
      .get<any>(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${this.currentPage}`,
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
          this.getGenres();
          this.applyFilters();
          console.log(this.genres);
        },
      });
  }
  getTopBackground(): void {
    this.http
      .get<any>(
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/689/images?type=COVER&page=1',
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
  getGenres(): void {
    const allGenres = new Set<string>();
    this.movies.forEach((movie) => {
      movie.genres.forEach((g: any) => allGenres.add(g.genre));
    });
    this.genres = Array.from(allGenres);
  }
  filterMovies(): void {
    this.applyFilters();
  }
  applyFilters(): void {
    let movies = [...this.movies];
    if (this.selecetedGenre) {
      movies = movies.filter((movie) =>
        movie.genres.some((g: any) => g.genre === this.selecetedGenre)
      );
      this.filteredMovies = movies;
    } else {
      this.filteredMovies = this.movies;
    }
  }

  // Функции для пагинации
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageInput++;
      this.pageInput = this.currentPage;
      this.getTopMovies();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageInput--;
      this.pageInput = this.currentPage;
      this.getTopMovies();
    }
  }

  goToPage(): void {
    if (this.pageInput >= 1 && this.pageInput <= this.totalPages) {
      this.currentPage = this.pageInput;

      this.getTopMovies();
    }
  }
}
