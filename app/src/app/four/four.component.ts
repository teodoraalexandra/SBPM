import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  query: string = 'PREFIX : <http://buchmann.ro#>\n' +
    '\n' +
    '# Generate the entity types :Director and :Movie for all things connected by the relationship :directorOf \n' +
    '\n' +
    'CONSTRUCT {?x a :Director. ?y a :Movie}    \t\t\n' +
    'WHERE {?x :directorOf ?y}  \t\n' +
    '\n';

  rawResponse: string = '{\n' +
    '  "head": {\n' +
    '    "vars": [\n' +
    '      "subject",\n' +
    '      "predicate",\n' +
    '      "object"\n' +
    '    ]\n' +
    '  },\n' +
    '  "results": {\n' +
    '    "bindings": [\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#JamesCameron"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Director"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Avatar"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Movie"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Terminator"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Movie"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#JohnMcT"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Director"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Predator"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Movie"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#DieHard"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Movie"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#McG"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Director"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "bnode",\n' +
    '          "value": "genid-35feb2fd7f9d4d63b1e7561a4477bc67-somemovie"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Movie"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#ShBlack"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Director"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#KKBB"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Movie"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#TimBurton"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Director"\n' +
    '        }\n' +
    '      },\n' +
    '      {\n' +
    '        "subject": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Batman"\n' +
    '        },\n' +
    '        "predicate": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"\n' +
    '        },\n' +
    '        "object": {\n' +
    '          "type": "uri",\n' +
    '          "value": "http://buchmann.ro#Movie"\n' +
    '        }\n' +
    '      }\n' +
    '    ]\n' +
    '  }\n' +
    '}';

  constructor() { }

  ngOnInit(): void {
  }

}
