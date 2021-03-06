const { getOrderList, getOrderlById, getOrderListByCustomerId, getOrderLast, getOrderListByDate } = require('../query/order');
const { addOrder, updateOrder, deleteOrder, addOrderDetails, updateOrderStatus } = require('../mutation/order');

const orderRoutes = (app, sqlConfig) => {
    app.get('/orders', async function (req, res) {
        res.send(await getOrderList(sqlConfig));
    });

    app.get('/orderList/:id', async function (req, res) {
        res.send(await getOrderListByCustomerId(sqlConfig, req.params.id));
    });

    app.get('/orderList/:start/:end', async function (req, res) {
        res.send(await getOrderListByDate(sqlConfig, req.params.start, req.params.end));
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

    app.post('/order/update/status/:id', async function (req, res) {
        res.send(await updateOrderStatus(sqlConfig, req.params.id, req.body));
    });

    app.post('/order/update/:id', async function (req, res) {
        res.send(await updateOrder(sqlConfig, req.params.id, req.body));
    });

    app.get('/order/delete/:id', async function (req, res) {
        res.send(await deleteOrder(sqlConfig, req.params.id));
    });
}

module.exports = orderRoutes;