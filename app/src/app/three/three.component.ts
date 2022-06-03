import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  query: string = 'PREFIX : <http://buchmann.ro#>\n' +
    '\n' +
    '# Directors together with their average budget and the number of movies for each\n' +
    '\n' +
    'SELECT ?director (AVG(?budget) AS ?averageBudget)  (COUNT(?film) AS ?movieCount)\n' +
    '{\n' +
    ' ?director :directorOf ?film.\n' +
    ' ?film:hasBudget ?budget.\n' +
    '}\n' +
    'GROUP BY ?director\n' +
    'HAVING (?averageBudget>15000000)\n' +
    'ORDER BY ?averageBudget';

  rawResponse: string = '{\n' +
    '  "head": {\n' +
    '    "vars": [\n' +
    '      "director",\n' +
    '      "averageBudget",\n' +
    '      "movieCount"\n' +
    '    ]\n' +
    '  },\n' +
    '  "results": {\n' +
    '    "bindings": [\n' +
    '      {\n' +
    '        "director": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#JohnMcT"\n' +
    '        },\n' +
    '        "averageBudget": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#decimal",\n' +
    '          "type": "literal",\n' +
    '          "value": "18000000"\n' +
    '        },\n' +
    '        "movieCount": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#integer",\n' +
    '          "type": "literal",\n' +
    '          "value": "1"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "director": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#JamesCameron"\n' +
    '        },\n' +
    '        "averageBudget": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#decimal",\n' +
    '          "type": "literal",\n' +
    '          "value": "121700000"\n' +
    '        },\n' +
    '        "movieCount": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#integer",\n' +
    '          "type": "literal",\n' +
    '          "value": "2"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "director": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#McG"\n' +
    '        },\n' +
    '        "averageBudget": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#decimal",\n' +
    '          "type": "literal",\n' +
    '          "value": "200000000"\n' +
    '        },\n' +
    '        "movieCount": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#integer",\n' +
    '          "type": "literal",\n' +
    '          "value": "1"\n' +
    '        }\n' +
    '      }\n' +
    '    ]\n' +
    '  }\n' +
    '}';

  constructor() { }

  ngOnInit(): void {
  }

}
