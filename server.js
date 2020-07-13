const express = require('express');
const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.homepage = false;
  next();
});

app.use('/', require('./router'));

let PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on PORT ${PORT}...`));
