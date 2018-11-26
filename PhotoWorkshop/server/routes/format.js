const { getFormatList, getFormatById } = require('../query/format');
const { addFormat, updateFormat, deleteFormat } = require('../mutation/format');

const formatRoutes = (app, sqlConfig) => {
    app.get('/formats', async function (req, res) {
        res.send(await getFormatList(sqlConfig));
    });

    app.get('/format/:id', async function (req, res) {
        res.send(await getFormatById(sqlConfig, req.params.id));
    });

    app.post('/format/add', async function (req, res) {
        res.send(await addFormat(sqlConfig, req.body ));
    });

    app.post('/format/update/:id', async function (req, res) {
        res.send(await updateFormat(sqlConfig, req.params.id, req.body));
    });

    app.post('/format/delete/:id', async function (req, res) {
        res.send(await deleteFormat(sqlConfig, req.params.id));
    });
}

module.exports = formatRoutes;