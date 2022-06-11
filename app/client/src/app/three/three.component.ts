import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface CustomResponse {
  director: string;
  averageBudget: string;
  movieCount: string;
}

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  query = '# Directors together with their average budget and the number of movies for each';
  rawResponse: CustomResponse[];

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:5000/3')
      .subscribe(value => this.rawResponse = value.records);
  }

  ngOnInit(): void {
  }
}
