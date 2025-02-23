import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  imports: [],
  templateUrl: './detail-film.component.html',
  styleUrl: './detail-film.component.scss',
})
export class DetailFilmComponent implements OnInit {
  movie: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMovie(id);
    }
  }
  getMovie(id: string): void {
    this.http
      .get<any>(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: {
          'X-API-KEY': '63d28fb1-f0f3-490e-ad75-8cfe6a51aabc',
          'Content-Type': 'application/json',
        },
      })
      .subscribe({
        next: (data) => {
          this.movie = data;
        },
      });
  }
}
