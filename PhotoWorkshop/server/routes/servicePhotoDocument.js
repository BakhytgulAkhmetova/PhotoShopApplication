const { getPhotoDocumentList,
        getServicePhotoDocumentById } = require('../query/servicePhotoDocument');
const { addServicePhotoDocument,
        updateServicePhotoDocument,
        deleteServicePhotoDocument } = require('../mutation/servicePhotoDocument');

const servicePhotoDocRoutes = (app, sqlConfig) => {
    app.get('/servicesPhotoDocument', async function (req, res) {
        res.send(await getPhotoDocumentList(sqlConfig));
    });

    app.get('/servicePhotoDocument/:id', async function (req, res) {
        res.send(await getServicePhotoDocumentById(sqlConfig, req.params.id));
    });

    app.post('/servicePhotoDocument/add', async function (req, res) {
        res.send(await addServicePhotoDocument(sqlConfig, req.body ));
    });

    app.post('/servicePhotoDocument/update/:id', async function (req, res) {
        res.send(await updateServicePhotoDocument(sqlConfig, req.params.id, req.body));
    });

    app.post('/servicePhotoDocument/delete/:id', async function (req, res) {
        res.send(await deleteServicePhotoDocument(sqlConfig, req.params.id));
    });
}

module.exports = servicePhotoDocRoutes;