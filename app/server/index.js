const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors())

const { EnapsoGraphDBClient } = require("@innotrade/enapso-graphdb-client");

// Config
const GRAPHDB_BASE_URL = "http://localhost:7200";
const GRAPHDB_REPOSITORY = "movies";

const DEFAULT_PREFIXES = [
    EnapsoGraphDBClient.PREFIX_OWL,
    EnapsoGraphDBClient.PREFIX_RDF,
    EnapsoGraphDBClient.PREFIX_RDFS,
    EnapsoGraphDBClient.PREFIX_XSD,
    EnapsoGraphDBClient.PREFIX_PROTONS,
    {
        prefix: 'entest',
        iri: "http://ont.enapso.com/test#",
    }
];

//Create an Endpoint.
let graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
    baseURL: GRAPHDB_BASE_URL,
    repository: GRAPHDB_REPOSITORY,
    prefixes: DEFAULT_PREFIXES,
    transform: 'toCSV'
});

let query1Result;
const query1Text = `PREFIX : <http://buchmann.ro#>
SELECT ?directorName ?title
WHERE
{
:Arnold :playedIn/^:directorOf/:hasName ?directorName.
?directorName ^:hasName/:directorOf/:hasTitle ?title
}`;

let query2Result;
const query2Text = `PREFIX : <http://buchmann.ro#>
SELECT ?title ?budget
WHERE 
{
    ?film :hasTitle ?title.
    OPTIONAL {?film :hasBudget ?budget}
}`;

let query3Result;
const query3Text = `PREFIX : <http://buchmann.ro#>
SELECT ?director (AVG(?budget) AS ?averageBudget)  (COUNT(?film) AS ?movieCount)
{
 ?director :directorOf ?film.
 ?film:hasBudget ?budget.
}
GROUP BY ?director
HAVING (?averageBudget>15000000)
ORDER BY ?averageBudget`;

let query4Result;
const query4Text = `PREFIX : <http://buchmann.ro#>
PREFIX luc: <http://www.ontotext.com/connectors/lucene#>
PREFIX inst: <http://www.ontotext.com/connectors/lucene/instance#>
SELECT ?result ?foundField ?foundText WHERE
{
?search \ta \t\tinst:connectorTitlesBirthplacesIDs ;
luc:query \t\t"A*" ;
      \tluc:entities \t?result .
?result\tluc:snippets \t[luc:snippetField ?foundField; luc:snippetText ?foundText].
}`;

graphDBEndpoint
    .login('admin', 'root')
    .then((result) => {
        console.log("Login success: ", result);
    })
    .catch((err) => {
        console.log("Login error: ", err);
    });

graphDBEndpoint
    .query(query1Text, { transform: 'toJSON' }
    ).then((result) => {
        query1Result = JSON.stringify(result, null, 2);
    })
    .catch((err) => {
        query1Result = err;
    });

graphDBEndpoint
    .query(query2Text, { transform: 'toJSON' }
    ).then((result) => {
        query2Result = JSON.stringify(result, null, 2);
    })
    .catch((err) => {
        query2Result = err;
    });

graphDBEndpoint
    .query(query3Text, { transform: 'toJSON' }
    ).then((result) => {
        query3Result = JSON.stringify(result, null, 2);
    })
    .catch((err) => {
        query3Result = err;
    });

graphDBEndpoint
    .query(query4Text, { transform: 'toJSON' }
    ).then((result) => {
        query4Result = JSON.stringify(result, null, 2);
    })
    .catch((err) => {
        query4Result = err;
    });

app.get('/1', (req, res) => {
    res.send(query1Result);
});

app.get('/2', (req, res) => {
    res.send(query2Result);
});

app.get('/3', (req, res) => {
    res.send(query3Result);
});

app.get('/4', (req, res) => {
    res.send(query4Result);
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
