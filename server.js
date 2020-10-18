const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app.js');


// 4) SERVER
const port = process.env.PORT || 6000
app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});