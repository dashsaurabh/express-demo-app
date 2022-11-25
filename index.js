const port = 3000;
const express = require('express');

app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    console.log(`The request has been made to URL: ${req.url}`);
    next();
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from your first Express app");
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`The Product Id: ${id}`);
})

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send("QUERY PARAMS")
})

app.post("/products", (req, res) => {
    console.log(req.body);
    console.log(req.query)
    res.send("POST SUCCESSFUL");
})

app.listen(port, () => {
    console.log(`The Express server is listening on port ${port}`);
})