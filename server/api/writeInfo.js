const fs = require('fs');
module.exports = function (req, res) {
    let residentList = JSON.parse(fs.readFileSync('./data_table/residentList.json', 'utf-8'));
    let id = req.body.id;
    let info = req.body.info;
    residentList.forEach((v, i) => {
        if (v.id === id) {
            v.info = info;
        }
    });
    fs.writeFileSync('./data_table/residentList.json', JSON.stringify(residentList));
    res.end(JSON.stringify('success'));
};