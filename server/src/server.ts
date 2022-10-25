import express from 'express';

const app = express();
const port = 3333;

app.get('/ads', (req, res) => {
    res.json([
        { id: 3, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
        { id: 4, name: 'Anúncio 4' },
    ]);
});

app.listen(port, () => {
    console.log('listening on port', port);
});
