const { getPhotoList, getPhotosByCustomerId } = require('../query/photo');
const { addPhoto, updatePhoto, deletePhoto } = require('../mutation/photo');

const photoRoutes = (app, sqlConfig) => {
    app.get('/photos', async function (req, res) {
        res.send(await getPhotoList(sqlConfig));
    });

    app.get('/photo/:id', async function (req, res) {
        res.send(await getPhotosByCustomerId(sqlConfig, req.params.id));
    });

    app.post('/photo/add', async function (req, res) {
        res.send(await addPhoto(sqlConfig, req.body ));
    });

    app.post('/photo/update/:id', async function (req, res) {
        res.send(await updatePhoto(sqlConfig, req.params.id, req.body));
    });

    app.post('/photo/delete/:id', async function (req, res) {
        res.send(await deletePhoto(sqlConfig, req.params.id));
    });
}

module.exports = photoRoutes;