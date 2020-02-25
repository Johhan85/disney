const Promise = require('bluebird');
const sqlite = require('sqlite');

const dbCon = sqlite.open('./db/db.db', { Promise });

const getDisneyFig = async (name) => {
    try {
        const sqlQuery = 'SELECT name, job, img from disney where name = ?';
        const db = await dbCon;
        return db.get(sqlQuery, name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getDisneyFig : getDisneyFig
}


