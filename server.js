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
    const s=Number(req.body.first) +Number( req.body.second);
    res.status(200).json({ "result": s });

});


baseRouter.post('/subtract', (req, res) => {
    const t=Number(req.body.first) - Number(req.body.second);
    
    res.status(200).json({ "result": t });


});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
