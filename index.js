const express = require('express');
const app = express();
const PORT = 7878;

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log(`listening on port http://localhost:${PORT}`);
});
