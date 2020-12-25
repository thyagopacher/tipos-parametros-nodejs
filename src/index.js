const express = require('express');

const app = express();
/** precisa sempre vir declarado antes das rotas para o express entender json */
app.use(express.json());

/** define a rota / para que seja usada via GET*/
app.get('/projects', (request, response) => {
    /** pegando parametros via get*/
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);    
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);    
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(id);

    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);    
});

/** passa a porta para a qual podera ser acessado */
app.listen(3333, () => {
    console.log('(⌐■_■) Back-end started !')
});