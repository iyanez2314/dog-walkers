const express = require('express');
const exphbs = require('express-handlbars')
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('hbs', exphbs({extname: ".hbs"}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(port,() => {
    console.log(`The server is listening on port ${port}`)
})