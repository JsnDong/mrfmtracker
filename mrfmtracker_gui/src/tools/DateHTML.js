function getToday() {
    const [month, date, year] = new Date().toLocaleDateString().split('/');

    return year + '-' +
        (parseInt(month) < 10? '0' + month : month) + '-' +
        (parseInt(date) < 10? '0' + date : date);
}

export {getToday};