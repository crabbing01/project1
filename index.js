var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var util = require("./util");

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));
var _DATA = util.loadData().players;
var _ = require("underscore");

/* Add whatever endpoints you need! Remember that your API endpoints must
 * have '/api' prepended to them. Please remember that you need at least 5
 * endpoints for the API, and 5 others.
 */

app.get('/',function(req,res){
  var tags = util.getPlayers(_DATA);
  res.render('home',{
  	data: _DATA,
  	tags: tags
  });
});

app.get('/api/allPlayers', function(req, res) {
	res.json(_DATA);
});

app.get('/addPlayer',function(req,res){
  res.render('addPlayer');
});

app.post('/api/addPlayer', function(req, res) {
	var body = req.body;
	var nm = body.name;
	var pos = body.position;
	var con = parseInt(body.contract);
	var avg = parseInt(body.batting_average);
	var teams = body.teams_played_for;

	_DATA.push(req.body);
	util.saveData(_DATA);
	res.redirect('/');
}); 

app.get('/api/all',function(req,res){
	res.render('all',{
  		data: _DATA
    });

});

app.get('/api/pitchers',function(req,res){
	var ma = 0;
	var filt = _DATA.filter(function(e1){
		if (e1.batting_average > .149 && e1.position == 'P') {
			return e1.name
		} 
	});
	res.render('pitchers',{
  		data: filt 
 	});
});

app.get('/api/allstar',function(req,res){
	var filt = _DATA.filter(function(e1){
		if (e1.all_star == 'Yes'){
			return e1.name
		}
	});
	res.render('allstar',{
  		data: filt
  });
});

app.get('/api/longterm',function(req,res){
	var filt = _DATA.filter(function(e1){
		if (e1.contract >= 100 && e1.name) {
			return e1.name
		}
	});
	res.render('longterm',{
  		data: filt
  });
});	

app.get('/api/third',function(req,res){
	var filt = _DATA.filter(function(e1){
		if (e1.position == '3B' && e1.name) {
			return e1.name
		}
	});
	res.render('third',{
  		data: filt
  });
});

function check() {
    var user_in = document.getElementById("players").value;
    var filt = _DATA.filter(function(e1){
		if (e1.name) {
			return e1.name
		}
	});
   
    if (filt.includes(user_in)) {
    	document.getElementById("players").value = "" ;
         app.get('/search', function(req, res){
         	var found = _DATA.filter(function(e2){
				if (e2.name == user_in) {
					return e1.name
				}
			});
         	res.render('search', {
         		data: found
         	});
         });
    } else {
    	document.getElementById("players").value = "" ;
    	
    }
}

app.listen(3000, function() {
    console.log('Listening on port 3000!');
});
