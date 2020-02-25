const express = require('express');
const app = express();
const disneyRoute = require('./routes/disney');

app.use(express.static('public'));
app.use(express.json());
app.use(disneyRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});