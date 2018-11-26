const { getServiceAdditionalList,
        getServiceAdditionalById } = require('../query/serviceAdditional');
const { addServiceAdditional,
        updateServiceAdditional,
        deleteServiceAdditional } = require('../mutation/serviceAdditional');

const serviceAdditionalRoutes = (app, sqlConfig) => {
    app.get('/servicesAdditional', async function (req, res) {
        res.send(await getServiceAdditionalList(sqlConfig));
    });

    app.get('/serviceAdditional/:id', async function (req, res) {
        res.send(await getServiceAdditionalById(sqlConfig, req.params.id));
    });

    app.post('/serviceAdditional/add', async function (req, res) {
        res.send(await addServiceAdditional(sqlConfig, req.body ));
    });

    app.post('/serviceAdditional/update/:id', async function (req, res) {
        res.send(await updateServiceAdditional(sqlConfig, req.params.id, req.body));
    });

    app.post('/serviceAdditional/delete/:id', async function (req, res) {
        res.send(await deleteServiceAdditional(sqlConfig, req.params.id));
    });
}

module.exports = serviceAdditionalRoutes;