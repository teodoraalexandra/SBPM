import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface CustomResponse {
  directorName: string;
  title: string;
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  query = '# Looks for all movies\' titles directed by those who directed the movies where Arnold played';
  rawResponse: CustomResponse[];

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:5000/1')
      .subscribe(value => this.rawResponse = value.records);
  }

  ngOnInit(): void {
  }
}
