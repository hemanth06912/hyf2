const express = require('express');

const app = express();
const port = 6000;


const mealsRouter = require('./routes/meals.js');
const mealRouter = require('./routes/meal.js');
const cheap_mealsRouter = require('./routes/cheap-meals.js');
const large_mealsRouter = require('./routes/large-meals.js');
const reservationsRouter = require('./routes/reservations.js');
const reservationRouter = require('./routes/reservation.js');



app.get('/meals', mealsRouter);
app.get('/meal', mealRouter);
app.get('/cheap-meals', cheap_mealsRouter);
app.get('/large-meals', large_mealsRouter);
app.get('/reservations',reservationsRouter);
app.get('/reservation', reservationRouter);



app.listen(port,()=>console.log(`server started on port ${port}`));
