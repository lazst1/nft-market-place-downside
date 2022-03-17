export function keyCodeNumberRange(keyCode) {
    if (keyCode > 95 && keyCode < 106 || keyCode > 47 && keyCode < 58 || keyCode === 8 || keyCode === 46 || keyCode === 37 || keyCode === 39 || keyCode === 110 || keyCode === 190 || keyCode === 9 || keyCode === 16) {
        return true;
    } else {
        return false;
    }
}

export function roundTo(num, e = 3) {
    return +(Math.round(num + `e+${e}`) + `e-${e}`);
}

export function formatDate(date) {
    const d = new Date(date);
    const dFormat = [
        d.getMonth() + 1,
        d.getDate(),
        d.getFullYear()
    ].join('/') + ', ' +
        formatAMPM(d);
    return dFormat;
}

export function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export function formatOrderStatus(status) {
    let orderStatus;
    switch (status) {
        case '0':
            orderStatus = 'Created'
            break;
        case '1':
            orderStatus = 'Bidded'
            break;
        case '2':
            orderStatus = 'Sold'
            break;
        case '3':
            orderStatus = 'Completed'
            break;
        case '4':
            orderStatus = 'Canceled'
            break;

        default:
            break;
    }
    return orderStatus;
}

export function toUpercaseFirstLetterOfString(sentence) {
    return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

export function emailValidate(email) {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}

export function queryBuilder(data) {
    let query = '';
    let firstArg = true;
    for (const [key, value] of Object.entries(data)) {
        if (firstArg) {
            query += key + '=' + value;
            firstArg = false;
        } else {
            query += '&' + key + '=' + value;
        }
    }
    return query;
}
