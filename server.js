/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app.js');

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => console.log('Connection to DB successful'));


// 4) SERVER
const port = process.env.PORT || 6000
app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});