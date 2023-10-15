//var -- primeira variavel do JS

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)

// var area;

// let forma = 'retângulo'
// let altura = 10;
// let comprimento = 5;
// let area;

// if(forma === 'retângulo'){
//     area = altura * comprimento;
// }
// else{
//     area = (altura * comprimento) / 2
// }

// console.log(area)

const forma = 'quadrado';//const tem que ser declarada antes e é fixa//
const altura = 5;
const comprimento = 7;
let area;//permite trocar valores mas tem que declarar antes//

if(forma === 'triângulo'){
    area = altura *comprimento;
}else{
    area = (altura * comprimento) / 2;
}

console.log(area)
