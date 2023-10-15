const texto1 = "Bom dia gente!!"
const texto2 = "Salve menor"
const senha1 = "senha super segura456"
const citacao = "Meu lindo nome é "

console.log(texto1)
console.log(citacao)


//concatenação (+)

const nome1 = "Gabriel"
const nome2 = " Yanes"

console.log(citacao + nome1 + nome2)

//template string OU template literal(procurar depois)

//--CONTEUDO DIFERENTE--//

//Condificação de Strings
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Trabalhando com Strings

// const cidade = "belo horizonte";
// const input = "Belo Horizonte";

// console.log(cidade === input); //false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();//converteu tudo para letra minuscula

console.log(cidade === inputMinusculo); // true

//aprendendo lenght


const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres
