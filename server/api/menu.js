const fs = require('fs');
module.exports = function (req, res) {
    let data = null;
    switch (req.params.name) {
    case 'public': data = fs.readFileSync('../mock/public.json', 'utf-8');
        break;
    case 'grid': data = fs.readFileSync('../mock/grid.json', 'utf-8');
        break;
    case 'entry': data = fs.readFileSync('../mock/entry.json', 'utf-8');
        break;
    };
    res.end(data);
};