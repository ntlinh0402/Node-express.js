const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, 'public')))
//HTPP logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
// app.engine('handlebars', handlebars());
app.set("views", path.join(__dirname, 'resources\\views'));
 // cách mình tìm đến file, hệ điều hành window
//  console.log('PATH',path.join(__dirname,'view'))



app.get('/', (req, res) => {
  res.render('home'); 

})
app.get('/news', (req, res) => {
  res.render('news'); 

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})