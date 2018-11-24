const { getErrorList } = require('../query/error');

const errorRoutes = (app, pool) => {
    app.get('/', async function (req, res) {
    res.send(await getErrorList(pool));
})}

module.exports = errorRoutes;
