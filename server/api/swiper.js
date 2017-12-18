const fs = require('fs');
module.exports = function (req, res) {
    let clist = JSON.parse(fs.readFileSync('./data_table/activityList.json', 'utf-8'));
    clist.list.forEach((v, i) => {
        v.startDate = v.startDate.split('T')[0];
    });
    res.end(JSON.stringify(clist.list));
};