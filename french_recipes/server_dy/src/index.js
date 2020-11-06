const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv')

const app = express();

app.use(morgan('common'))
app.use(helmet())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));


app.get('/', (req, res) => {
    res.send('hello')
})

const port = process.env.PORT || 4000
app.listen(4000, () => {
    console.log(`Running at http://localhost:${4000}`)
})