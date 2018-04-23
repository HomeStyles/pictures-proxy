const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 4848;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('')

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
