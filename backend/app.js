const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const moment = require('moment-timezone');
const adminRouter = require('#routes/admin');
const formRouter = require('#routes/form');
const userRouter = require('#routes/user');




const app = express();

// Definir la zona horaria de Buenos Aires Argentina
morgan.token('date', () => moment().tz('America/Argentina/Buenos_Aires').format('DD-MM-YYYY HH:mm:ss'));
// Formato personalizado para Morgan
const detailedFormat = '--- --- \n IP: :remote-addr \n User: :remote-user \n Date: [:date] \n Method: ":method :url HTTP/:http-version" \n Status: :status \n Navegator: ":user-agent" \n ResponseTime: :response-time ms';

app.use(morgan(detailedFormat));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Rutas

app.use('/admin', adminRouter);
app.use('/form', formRouter);
app.use('/user', userRouter);

module.exports = app;
