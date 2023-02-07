import fetch from 'node-fetch';
import  express  from 'express';

var app = express()

app.get('/', function(req, res) {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resposta => resposta.json())
    .then(resposta => console.table(resposta))
    res.end()
}) 

app.listen(8080, () => {
    console.log('porta 8080 -------')
})