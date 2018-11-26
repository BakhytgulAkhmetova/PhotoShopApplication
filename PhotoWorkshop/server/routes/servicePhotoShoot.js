const { getServicePhotoShootList,
        getServicePhotoShootById } = require('../query/servicePhotoShoot');
const { addServicePhotoShoot,
        updateServicePhotoShoot,
        deleteServicePhotoShoot } = require('../mutation/servicePhotoShoot');

const servicePhotoShootRoutes = (app, sqlConfig) => {
app.get('/servicesPhotoShoot', async function (req, res) {
    res.send(await getServicePhotoShootList(sqlConfig));
});

app.get('/servicePhotoShoot/:id', async function (req, res) {
    res.send(await getServicePhotoShootById(sqlConfig, req.params.id));
});

app.post('/servicePhotoShoot/add', async function (req, res) {
    res.send(await addServicePhotoShoot(sqlConfig, req.body ));
});

app.post('/servicePhotoShoot/update/:id', async function (req, res) {
    res.send(await updateServicePhotoShoot(sqlConfig, req.params.id, req.body));
});

app.post('/servicePhotoShoot/delete/:id', async function (req, res) {
    res.send(await deleteServicePhotoShoot(sqlConfig, req.params.id));
});
}

module.exports = servicePhotoShootRoutes;