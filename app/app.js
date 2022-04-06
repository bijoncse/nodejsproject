var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','app/views');

app.locals.siteTitle = 'Company';
app.locals.allFriends = dataFile.friends;
app.use(express.static('app/public'));
app.use(require('./routers/index'));
app.use(require('./routers/friends'));


var Server = app.listen(app.get('port'), function(){
  console.log('listen to port '+app.get('port'));
});

reload(Server, app);

