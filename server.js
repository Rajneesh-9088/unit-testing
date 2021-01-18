const { urlencoded } = require('express');
const express = require('express');
const { url } = require('inspector');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/',express.static(path.join(__dirname , 'public_static')));

app.post('/calcfare',(req,res) =>{
    let km = parseFloat(req.body.km);
    let min = parseInt(req.body.min);
    let fare = 50;
    fare += (km>5) ? ((km - 5) * 10) : 0 ;
    fare += (min>15) ? ((min - 15) * 2) : 0;

    res.send({ fare: fare});

})

app.listen(2222,()=>{console.log(`server started on http://localhost:2222`)});

