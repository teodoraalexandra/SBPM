import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  query: string = 'PREFIX : <http://buchmann.ro#>\n' +
    '\n' +
    'PREFIX luc: <http://www.ontotext.com/connectors/lucene#>\n' +
    'PREFIX inst: <http://www.ontotext.com/connectors/lucene/instance#>\n' +
    '\n' +
    'SELECT ?result ?foundField ?foundText WHERE\n' +
    '{\n' +
    '?search \ta \t\tinst:connectorTitlesBirthplacesIDs ;\n' +
    'luc:query \t\t"A*" ;\n' +
    '      \tluc:entities \t?result .\n' +
    '?result\tluc:snippets \t[luc:snippetField ?foundField; luc:snippetText ?foundText].\n' +
    '}';

  rawResponse: string = '{\n' +
    '  "head": {\n' +
    '    "vars": [\n' +
    '      "result",\n' +
    '      "foundField",\n' +
    '      "foundText"\n' +
    '    ]\n' +
    '  },\n' +
    '  "results": {\n' +
    '    "bindings": []\n' +
    '  }\n' +
    '}';

  constructor() { }

  ngOnInit(): void {
  }

}
