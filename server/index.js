const express = require('express');
const app = express();
const PORT = 4000;

const db = {
  "categories": ["kairos", "laboral", "desarrollo", "agile"],
  "resources": {
    "kairos":[
      {
        "title": "calendario laboral",
        "description": "Calendario laboral del año en curso",
        "masinfo": "",
        "url": "https://www.calendarioslaborales.com/calendario-laboral-madrid-2019.htm"
      },
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      },
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ],
    "laboral": [
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ],
    "desarrollo": [
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ],
    "agile": [
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ]
  }
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	res.json({ "kairectorio": "API REST" });
});

app.get('/categories', function (req, res) {
  let result = db.categories;
	res.json(result);
});

app.get('/resources/:category', function (req, res) {
  let category = req.params.category
  let result = db.resources[category];
	res.json(result);
});

app.listen(PORT, function () {
	console.log('Your node js server is running on PORT:', PORT);
});

