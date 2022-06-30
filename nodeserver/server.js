const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT||9905;

app.use(express.static(path.join(__dirname,'dist/firstapp')));

app.get('/',(req,res) => {
    res.send('dist/firstapp/index.html')
});

app.listen(port);