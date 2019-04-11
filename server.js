var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
const path = require('path');
const serveIndex = require('serve-index');
const multer = require('multer');
md5 = require('js-md5');
const port = process.env.PORT || 5000;

var app = express();
app.use(cors());
app.use(bodyParser());

var storage = multer.diskStorage({
  destination: 'images/',
  filename: (req, file, cb) => {
    var parts = file.originalname.split('.');
    var newName = md5(Math.random().toString(36).substring(2, 15)) + '.' + parts[parts.length - 1];
    cb(null, newName)
    var partsID = file.fieldname.split('-');
    var persons = JSON.parse(fs.readFileSync('task.json', 'utf8'));
    const result = persons.filter(person => person.id != partsID[1]);
    const thisPerson = persons.find(person => person.id == partsID[1]);
    if (persons.length !== result.length) {
      result.push({
        ...thisPerson,
        image: newName
      });
      fs.writeFileSync('task.json', JSON.stringify(result));
    }
  }
})

const upload = multer({ storage: storage })
const route = '/images';
const pathy = '.' + route;

app.use(route, serveIndex(pathy));
app.use(route, express.static(pathy));

app.get('/persons', (req, res) => {
  var persons = JSON.parse(fs.readFileSync('task.json', 'utf8'));
  res.send(persons.sort((a, b) => Number(a.id) - Number(b.id)));
})

app.post('/persons', (req, res) => {
  var persons = JSON.parse(fs.readFileSync('task.json', 'utf8'));
  var maxId = persons.length === 0 ? 0 : Math.max(...persons.map(persons => +persons.id));

  persons.push({
    id: maxId + 1,
    name: req.body.name,
    surname: req.body.surname,
    company: req.body.company
  })

  fs.writeFileSync('task.json', JSON.stringify(persons));
  res.send(persons.sort((a, b) => Number(a.id) - Number(b.id)));
})

app.put('/persons/:id', (req, res) => {

  var persons = JSON.parse(fs.readFileSync('task.json', 'utf8'));
  const result = persons.filter(person => person.id != req.params.id);

  if (persons.length !== result.length) {
    result.push({
      id: req.params.id,
      name: req.body.name,
      surname: req.body.surname,
      company: req.body.company
    });
    fs.writeFileSync('task.json', JSON.stringify(result));
  }
  res.send(result.sort((a, b) => Number(a.id) - Number(b.id)));
})

app.delete('/persons/:id', (req, res) => {
  var persons = JSON.parse(fs.readFileSync('task.json', 'utf8'));
  const result = persons.filter(person => person.id != req.params.id);
  // for (var i = person.length - 1; i >= 0; i--) {
  //   if (person[i].id == req.params.id) {
  //     person.splice(i, 1);
  //   }
  // }
  fs.writeFileSync('task.json', JSON.stringify(result));
  res.send(result.sort((a, b) => Number(a.id) - Number(b.id)));
})

app.post('/upload-image', upload.any(), (req, res, next) => {
  res.send(req.files);
});

app.use(express.static(path.join(__dirname, 'web/build')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'web/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'web/build/index.html'));
  })
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/web/public/index.html'));
})

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
})
