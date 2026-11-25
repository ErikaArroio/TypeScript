let prod1: string = "Arroz";
let prod2: string = "Feijão";
let prod3: string = "Leite";

let qtdArroz: number = 2;
let qtdFeijao: number = 3;
let qtdLeite: number = 4;

let preco1: number = 25;
let preco2: number = 8;
let preco3: number = 5;

let totalArroz: number = preco1*qtdArroz;
let totalFeijao: number = preco2*qtdFeijao;
let totalLeite: number = preco3*qtdLeite;

let totalCompra: number = totalArroz + totalFeijao + totalLeite;
let desconto: number = totalCompra*0.1;


console.log(` ===== SUPERMERCAD0 =====\n `)
console.log(` ${prod1}: R$${preco1*qtdArroz} `)
console.log(` ${prod2}: R$${preco2*qtdFeijao} `)
console.log(` ${prod3}: R$${preco3*qtdLeite} \n`)
console.log(` Valor Total: R$${totalCompra} `)
console.log(` Desconto: R$${desconto} `)
console.log(` Valor Final: R$${totalCompra-desconto} `)
