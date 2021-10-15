const express = require('express');
var morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes');
const mongoose = require('mongoose');

// Conexión BD
const urlDB = 'mongodb+srv://administrador:Adm123456@cluster0.cekn1.mongodb.net/inmoVentas?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(urlDB)
.then(mongoose => console.log('DB conectada en Atlas'))
.catch(err => console.log(err));





const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

