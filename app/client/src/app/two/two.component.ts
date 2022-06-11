import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface CustomResponse {
  title: string;
  budget: string;
}

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  query = '# Indicate that some property is potentially missing';
  rawResponse: CustomResponse[];

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:5000/2')
      .subscribe(value => this.rawResponse = value.records);
  }

  ngOnInit(): void {
  }
}
