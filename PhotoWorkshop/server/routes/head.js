const { getHeadByLoginPassword } = require('../query/head');

const headRoutes = (app, sqlConfig) => {

    app.get('/head/:login/:password', async function (req, res) {
        res.send(await getHeadByLoginPassword(sqlConfig, req.params.login, req.params.password));
    });
}

module.exports = headRoutes;