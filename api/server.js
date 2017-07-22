const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use('/api', require('./endpoints/bookmarks'));





app.listen(3000, function () {
  console.log('API Server listening on port 3000!')
});
