import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {
  query: string = 'BASE <http://buchmann.ro#>\n' +
    'PREFIX mapper: <http://www.ontotext.com/mapper/>\n' +
    'PREFIX schema: <http://schema.org#>\n' +
    'PREFIX : <http://buchmann.ro#>\n' +
    'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n' +
    '\n' +
    'CONSTRUCT {\n' +
    '    ?s1 a schema:Movie ;\n' +
    '        :hasTitle ?o_hasTitle .\n' +
    '} WHERE {\n' +
    '    SERVICE <rdf-mapper:ontorefine:2046132899688> {\n' +
    '        # Columns as variables:\n' +
    '        #   ?c_Rank, ?c_Title, ?c_Genre, ?c_Description, ?c_Director, ?c_Actors, ?c_Year,\n' +
    '        #   ?c_Runtime__Minutes_, ?c_Rating, ?c_Votes, ?c_Revenue__Millions_, ?c_Metascore\n' +
    '        # Metadata as variables:\n' +
    '        #   ?row_index, ?record_id\n' +
    '        BIND(IRI(mapper:encode_iri(?row_index)) as ?s1)\n' +
    '        BIND(STRLANG(?c_Title, "en") as ?o_hasTitle)\n' +
    '    }\n' +
    '}';

  rawResponse: string = '{\n' +
    '  "head": {\n' +
    '    "vars": [\n' +
    '      "subject",\n' +
    '      "predicate",\n' +
    '      "object"\n' +
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
