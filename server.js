var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

var campeggi =
    [
        { name: 'Oxford Main Camp', image: 'https://www.camping.hr/cmsmedia/katalog/7691/150-turist.jpg' },
        { name: 'Railway Boot Camp', image: 'https://www.camping.hr/cmsmedia/katalog/7690/140-strasko.jpg' },
        { name: 'Grand Camp', image: 'https://www.france-voyage.com/visuals/layout/sections/camping_w1200.ch.jpg' }
    ]

app.get('/', function (req, res) {
    res.render('homepage');
});

app.get('/campgrounds', function (req, res) {
    res.render('campgrounds', { campgrounds: campeggi });
});

app.post('/campgrounds', function (req, res) {

    var cName = req.body.campName; //recupero il valore campName nella chiamata req
    var cImage = req.body.campImage; //recupero il link dell'immagine cImage passata nella chiamata req

    var newCampg = { name: cName, image: cImage }// passo all'oggetto newCampg i valori recuperati dalla req(risposta inviata dal form)

    console.log(newCampg);
    campeggi.push(newCampg);
    res.redirect('/campgrounds');
});

app.get('/campgrounds/newCamp', function (req, res) {
    res.render('newcampForm');
});





app.listen(process.env.PORT, process.env.IP, function () {//Attiva l'ascolto delle richieste HTTP
    console.log('YelpCamp_V2 server is up...');
});