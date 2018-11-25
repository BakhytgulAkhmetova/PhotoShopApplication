const { getCustomerList, getCustomerById } = require('../query/customer');
const { addCustomer, updateCustomer, deleteCustomer } = require('../mutation/customer');

const customerRoutes = (app, sqlConfig) => {
    app.get('/customers', async function (req, res) {
        res.send(await getCustomerList(sqlConfig));
    });

    app.get('/customer/:id', async function (req, res) {
        res.send(await getCustomerById(sqlConfig, req.params.id));
    });

    app.post('/customer/add', async function (req, res) {
        res.send(await addCustomer(sqlConfig, req.body ));
    });

    app.post('/customer/update/:id', async function (req, res) {
        res.send(await updateCustomer(sqlConfig, req.params.id, req.body));
    });

    app.post('/customer/delete/:id', async function (req, res) {
        res.send(await deleteCustomer(sqlConfig, req.params.id));
    });
}

module.exports = customerRoutes;