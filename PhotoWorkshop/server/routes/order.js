const { getOrderList, getOrderlById, getOrderListByCustomerId, getOrderLast } = require('../query/order');
const { addOrder, updateOrder, deleteOrder, addOrderDetails } = require('../mutation/order');

const orderRoutes = (app, sqlConfig) => {
    app.get('/orders', async function (req, res) {
        res.send(await getOrderList(sqlConfig));
    });

    app.get('/orderList/:id', async function (req, res) {
        res.send(await getOrderListByCustomerId(sqlConfig, req.params.id));
    });

    app.get('/order/:id', async function (req, res) {
        res.send(await getOrderlById(sqlConfig, req.params.id));
    });

    app.get('/order/last', async function (req, res) {
        res.send(await getOrderLast(sqlConfig));
    });

    app.post('/order/add', async function (req, res) {
        res.send(await addOrder(sqlConfig, req.body ));
    });

    app.post('/order/details', async function (req, res) {
        res.send(await addOrderDetails(sqlConfig, req.body ));
    });

    app.post('/order/update/:id', async function (req, res) {
        res.send(await updateOrder(sqlConfig, req.params.id, req.body));
    });

    app.post('/order/delete/:id', async function (req, res) {
        res.send(await deleteOrder(sqlConfig, req.params.id));
    });
}

module.exports = orderRoutes;