import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  query: string = 'PREFIX : <http://buchmann.ro#>\n' +
    '\n' +
    '# Indicate that some property is potentially missing\n' +
    '\n' +
    'SELECT ?title ?budget\n' +
    'WHERE \n' +
    '{\n' +
    '    ?film :hasTitle ?title.\n' +
    '    OPTIONAL {?film :hasBudget ?budget}\n' +
    '}\n' +
    '\n';

  rawResponse: string = '{\n' +
    '  "head": {\n' +
    '    "vars": [\n' +
    '      "title",\n' +
    '      "budget"\n' +
    '    ]\n' +
    '  },\n' +
    '  "results": {\n' +
    '    "bindings": [\n' +
    '      {\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Avatar"\n' +
    '        },\n' +
    '        "budget": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#integer",\n' +
    '          "type": "literal",\n' +
    '          "value": "237000000"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Terminator"\n' +
    '        },\n' +
    '        "budget": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#integer",\n' +
    '          "type": "literal",\n' +
    '          "value": "6400000"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Predator"\n' +
    '        },\n' +
    '        "budget": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#integer",\n' +
    '          "type": "literal",\n' +
    '          "value": "18000000"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Die Hard"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Rogue"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Kiss Kiss Bang Bang"\n' +
    '        },\n' +
    '        "budget": {\n' +
    '          "datatype": "http://www.w3.org/2001/XMLSchema#integer",\n' +
    '          "type": "literal",\n' +
    '          "value": "15000000"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "title": {\n' +
    '          "type": "literal",\n' +
    '          "value": "Batman"\n' +
    '        }\n' +
    '      }\n' +
    '    ]\n' +
    '  }\n' +
    '}';

  constructor() { }

  ngOnInit(): void {
  }

}
