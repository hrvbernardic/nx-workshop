import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { formatRating } from '@bg-hoard/store/utility-formatters';

@Component({
  selector: 'bg-hoard-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  game$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap((id) => this.http.get<any>(`api/games/${id}`))
  );

  formatRating = formatRating;
}
