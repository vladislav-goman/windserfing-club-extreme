const webpack = require('webpack');
const config = require('./config/webpack.prod');

var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

webpack(
  {
    ...config,
  },
  (err, stats) => {
    if (err || stats.hasErrors()) {
      console.err(err);
    }
    // app.listen(PORT, function () {
    //   console.log(`Example app listening at http://localhost:${PORT}`);
    // });
  }
);
