function maxLength(val, max) {
    if (val.length <= max || !val) return val
    else throw Error(`The length  ${val}' cannot exceed ${max} characters.`)
}

function notNullOrWhitespace(val) {
    if (val === null || !val==='')  throw Error(`Could not be null or white space`)
    else return val
}

module.exports = { maxLength, notNullOrWhitespace }