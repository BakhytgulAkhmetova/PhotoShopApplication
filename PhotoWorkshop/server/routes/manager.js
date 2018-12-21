const { getaManagerList, getManagerById, getManagerByLoginPassword } = require('../query/manager');
const { addManager, updateManager, deleteManager } = require('../mutation/manager');

const managerRoutes = (app, sqlConfig) => {
    app.get('/managers', async function (req, res) {
        res.send(await getaManagerList(sqlConfig));
    });

    app.get('/manager/:id', async function (req, res) {
        res.send(await getManagerById(sqlConfig, req.params.id));
    });

    app.get('/manager/:login/:password', async function (req, res) {
        res.send(await getManagerByLoginPassword(sqlConfig, req.params.login, req.params.password));
    });

    app.post('/manager/add', async function (req, res) {
        res.send(await addManager(sqlConfig, req.body ));
    });

    app.post('/manager/update/:id', async function (req, res) {
        res.send(await updateManager(sqlConfig, req.params.id, req.body));
    });

    app.post('/manager/delete/:id', async function (req, res) {
        res.send(await deleteManager(sqlConfig, req.params.id));
    });
}

module.exports = managerRoutes;