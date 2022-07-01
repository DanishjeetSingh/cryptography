const {createHash} = require('crypto')

function hash(input) {
    return createHash('sha256').update(input).digest('hex')
}

let password = 'nicepikbro'

console.log(hash(password))