module.exports = function (req, res) {
    var address = require('../data_table/address.json');
    res.end(JSON.stringify(address));
};