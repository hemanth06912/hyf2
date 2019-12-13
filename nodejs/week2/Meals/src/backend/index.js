const express = require('express');

const app = express();
const port = 6000;


const mealsRouter = require('./routes/meals.js');
const meals_idRouter = require('./routes/meals_id.js');
const reservationsRouter = require('./routes/reservations.js');
const reservations_idRouter = require('./routes/reservations_id.js');
const reviews_idRouter = require('./routes/reviews_id.js');
const reviewsRouter = require('./routes/reviews.js');
const max_priceRouter = require('./routes/max_price.js');
const createdAfterRouter = require('./routes/createdAfter.js/index.js');
const specLimitRouter = require('./routes/specLimit.js');
const title_matchRouter = require('./routes/title_match.js');


app.get('/meals', mealsRouter);
app.get('/meals', meals_idRouter);
app.get('/reservations/', reservationsRouter);
app.get('/reservations/', reservations_idRouter);
app.get('/reviews/:id', reviews_idRouter);
app.get('/reviews', reviewsRouter);
app.get('/meals?maxprice=', max_priceRouter);
app.get('api/meals?title=', title_matchRouter);
app.get('/api/meals?createdAfter=', createdAfterRouter);
app.get('/api/meals?limit=', specLimitRouter);



app.listen(port,()=>console.log(`server started on port ${port}`));
