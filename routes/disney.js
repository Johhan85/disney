const routes = require('express').Router();
const db = require('../db/database');

routes.get('/disney/:name', async (req, res) => {
    const name = req.params.name;

    try {
        const disneyFig = await db.getDisneyFig(name);
        console.log(disneyFig);
        res.json(disneyFig);
    } catch (error) {
        console.log(error);
    }
});




module.exports = routes;