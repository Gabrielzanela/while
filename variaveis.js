const { isNumber } = require("util")

let numeroInteiro = 10
console.log(numeroInteiro, typeof(numeroInteiro))

let numeroReal = 10.50
console.log(numeroReal, typeof(numeroReal))

let nome = 'monica'
console.log(nome, typeof(nome))

let isVazio = nome == "monica"
console.log(isVazio, typeof(isVazio))

let number = numeroInteiro === '10'
console.log(isNumber, typeof(isNumber))

const PORT = 3000
const URI = 'HTTP://localhost:${PORT}'
console.log(URI)