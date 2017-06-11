const express = require('express');


let app = express();
const PORT = process.env.PORT || 3000;
// app.use((req, res, next) => {
//   res.set('x-forwarded-proto', 'Apache');
// });
app.use(express.static('dist'));



app.listen(PORT, () => {
  console.log('App is listening on PORT', PORT);
});
