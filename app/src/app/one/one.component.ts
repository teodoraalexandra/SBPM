import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  query: string = 'PREFIX : <http://buchmann.ro#>\n' +
    '\n' +
    '# Looks for all movies\' titles directed by those who directed the movies where Arnold played\n' +
    '\n' +
    'SELECT ?directorName ?title\n' +
    'WHERE\n' +
    '{\n' +
    ':Arnold :playedIn/^:directorOf/:hasName ?directorName.\n' +
    '?directorName ^:hasName/:directorOf/:hasTitle ?title\n' +
    '}';

  rawResponse: string = '{\n' +
    '  "head": {\n' +
    '    "vars": [\n' +
    '      "directorName",\n' +
    '      "title"\n' +
    '    ]\n' +
    '  },\n' +
    '  "results": {\n' +
    '    "bindings": [\n' +
    '      {\n' +
    '        "directorName": {\n' +
    '          "type": "literal",\n' +
    '          "value": "James Cameron"\n' +
    '        },\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Avatar"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "directorName": {\n' +
    '          "type": "literal",\n' +
    '          "value": "James Cameron"\n' +
    '        },\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Terminator"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "directorName": {\n' +
    '          "type": "literal",\n' +
    '          "value": "John McTiernan"\n' +
    '        },\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Predator"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "directorName": {\n' +
    '          "type": "literal",\n' +
    '          "value": "John McTiernan"\n' +
    '        },\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Die Hard"\n' +
    '        }\n' +
    '      }\n' +
    '    ]\n' +
    '  }\n' +
    '}';

  constructor() { }

  ngOnInit(): void {
  }

}
