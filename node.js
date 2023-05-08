//const express = require('express'); 
//const path = require ('path');
//const app = express();
//const ejs = require('ejs');
//const ls = require('ls');
//const port = 3000;
//const morgan = require('morgan');
//const body_parser = require ('body-parser');
//const  { fstat } = raquire ('fs');
//const { listenerCount } = require ('process');

//let hola

//app.get('/argentina', (req, res) => {
    //res.send('tus equipos fueron leidos');
  //});
  //app.listen(port,() => {
    //console.log('Servidor anda');
  //});

  const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3222; 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('hola', {title: 'Mi sitio web', message: 'Bienvenido a mi sitio web'});
});

app.post('/api/ejemplo', (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const correo = req.body.correo;

 
  console.log('Nombre:', nombre);
  console.log('Edad:', edad);
  console.log('Correo:', correo);

 
  res.send('Datos recibidos correctamente');
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

