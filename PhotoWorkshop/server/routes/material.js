const { getMaterialList, getMaterialById } = require('../query/material');
const { addMaterial, updateMaterial, deleteMaterial } = require('../mutation/material');

const materialRoutes = (app, sqlConfig) => {
    app.get('/materials', async function (req, res) {
        res.send(await getMaterialList(sqlConfig));
    });

    app.get('/material/:id', async function (req, res) {
        res.send(await getMaterialById(sqlConfig, req.params.id));
    });

    app.post('/material/add', async function (req, res) {
        res.send(await addMaterial(sqlConfig, req.body ));
    });

    app.post('/material/update/:id', async function (req, res) {
        res.send(await updateMaterial(sqlConfig, req.params.id, req.body));
    });

    app.post('/material/delete/:id', async function (req, res) {
        res.send(await deleteMaterial(sqlConfig, req.params.id));
    });
}

module.exports = materialRoutes;