function getCookie (target) {
    let value;
    document.cookie.split('; ').forEach((item, index) => {
        let _key = item.split('=');
        if (_key[0] === target) {
            value = _key[1];
        }
    });
    return value;
};
function setCookie (a, b) {
    if (!a || !b) {
        return;
    }
    document.cookie = a + '=' + b;
}
function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval !== null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    };
}
export {
    getCookie,
    setCookie,
    delCookie
};