const fs = require('fs');

function write(_id) {
    return new Promise((res, rej) => {
        fs.writeFile('src/core/cursor.txt', _id, (err) => err ? rej(err) : res('OK saved'))
    })
}

function read() {
    return new Promise((res, rej) => {
        fs.readFile('src/core/cursor.txt', (err, b) => {
            if (err) rej(err)
            else { res(b.toLocaleString()) }
        })
    })
}

module.exports = {read, write}