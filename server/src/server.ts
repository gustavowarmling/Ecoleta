import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem');


    response.json([
        {
            name: 'Gustavo',
            age: '20',
            gender: 'Masc'
        },
        {
            name: 'Marina',
            age: '21',
            gender: 'Fem'
        },
        {
            name: 'Mateus',
            age: '18',
            gender: 'Masc'
        }
    ]);
});

app.listen(3333);