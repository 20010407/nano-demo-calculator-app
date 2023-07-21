const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended:true}));

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.status(200).send('Hello world!');

});

baseRouter.get('/add', (req, res) => {
    const num1 = Number(req.body.first);
    const num2 = Number(req.body.second);
    const result = num1 + num2;
    // const stresult = result.toString();
    res.json({ "result": result });

});


baseRouter.post('/subtract', (req, res) => {
    const num1 = Number(req.body.first);
    const num2 = Number(req.body.second);
    const result = num1 - num2;
    // const stresult = result.toString();
    res.json({ "result": result });

});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
