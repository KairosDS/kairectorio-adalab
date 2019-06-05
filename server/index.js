const express = require('express');
const cors = require('cors');
const app = express();
conf = {
  port: process.env.PORT || process.argv[2] || 3000,
  originUndefined: function (req, res, next) {
    if (!req.headers.origin) {
      res.json({
        mess: 'Hi you are visiting the service locally. If this was a CORS the origin header should not be undefined'
      });
      next();
    } else {
      next();
    }
  },
  cors: {
    origin: function (origin, cb) {
      let wl = ['https://kairectorio.herokuapp.com/', 'localhost:3000'];
      if (wl.indexOf(origin) != -1 || origin == undefined) {
        cb(null, true);
      } else {
        cb(new Error('invalid origin: ' + origin), false);
      }
    },
    optionsSuccessStatus: 200
  }
};
 
app.use(cors(conf.cors));

const db = {
  "categories": ["kairos", "laboral", "desarrollo", "agile"],
  "resources": {
    "kairos":[    
      {
        "title": "Kairos Digital Solutions",
        "description": "Kairós Digital Solutions web",
        "masinfo": "",
        "url": "https://www.kairosds.com"
      },
      {
        "title": "KairósDS en Linkedin",
        "description": "KairósDS en Linkedin",
        "masinfo": "",
        "url": "https://www.linkedin.com/company/kair%C3%B3s-digital-solutions-s-l-"
      },
      {
        "title": "KairósDS en Twitter",
        "description": "KairósDS en Twitter",
        "masinfo": "",
        "url": "https://twitter.com/kairos_ds"
      },
      {
        "title": "KairósDS en Facebook",
        "description": "KairósDS en Facebook",
        "masinfo": "",
        "url": "https://www.facebook.com/kariros.digital.solutions/"
      }
    ],
    "laboral": [
      {
        "title": "calendario laboral",
        "description": "Calendario laboral del año en curso",
        "masinfo": "",
        "url": "https://www.calendarioslaborales.com/calendario-laboral-madrid-2019.htm"
      },
      {
        "title": "Convenio Colectivo",
        "description": "Convenio Colectivo de consultoria",
        "masinfo": "",
        "url": "https://www.boe.es/boe/dias/2018/03/06/pdfs/BOE-A-2018-3156.pdf"
      },
      {
        "title": "",
        "description": "",
        "masinfo": "",
        "url": ""
      }
    ],
    "desarrollo": [
      {
        "title": "Guia de Javascript",
        "description": "Guia de Javascript de MDN",
        "masinfo": "",
        "url": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide"
      },
      {
        "title": "Guía de Lit-Element",
        "description": "Guía de Lit-Element de Google",
        "masinfo": "",
        "url": "https://lit-element.polymer-project.org/guide"
      },
      {
        "title": "Angular. Getting Started",
        "description": "Primeros pasos con Angular 8",
        "masinfo": "",
        "url": "https://angular.io/start"
      },
      {
        "title": "React. Tutorial",
        "description": "Tutorial de React",
        "masinfo": "",
        "url": "https://reactjs.org/tutorial/tutorial.html"
      },
      {
        "title": "VueJS. Getting Started",
        "description": "Primeros pasos con VueJS 2",
        "masinfo": "",
        "url": "https://vuejs.org/v2/guide/"
      }
    ],
    "agile": [
      {
        "title": "Manifiesto Ágil",
        "description": "Manifiesto Agil",
        "masinfo": "",
        "url": "https://agilemanifesto.org/iso/es/manifesto.html"
      },
      {
        "title": "Kanban - TKP",
        "description": "Certificate en Kanban - TKP",
        "masinfo": "",
        "url": "http://lku.kairosds.com/"
      },
      {
        "title": "Management 3.0",
        "description": "Redefining leadership: managing the system, not the people",
        "masinfo": "",
        "url": "https://management30.com/"
      },
      {
        "title": "Lean Change Management",
        "description": "Lean Change Management is a feedback-driven approach to change management inspired by combining the best ideas from Agile, Lean Startup, Change Management and Design Thinking.",
        "masinfo": "",
        "url": "https://leanchange.org/"
      }
    ]
  }
};

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

app.listen(conf.port, function () {
	console.log('Your node js server is running on PORT:', conf.port);
});
