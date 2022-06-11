import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface CustomResponse {
  search: string;
  result: string;
  foundField: string;
  foundText: string;
}

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  query = '# Use the Lucene connector created with name \'connectorTitlesBirthplacesIDs\'';
  rawResponse: CustomResponse[];

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:5000/4')
      .subscribe(value => this.rawResponse = value.records);
  }

  ngOnInit(): void {
  }
}
