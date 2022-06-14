// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

//resolução

enum Occupation {
    Atriz,
    Padeiro
}

interface Person {
    name: string,
    age: number,
    occupation: Occupation
}

let pessoa1: Person = {
    name: "maria",
    age: 29,
    occupation: Occupation.Atriz
};


let pessoa2: Person = {
    name: 'roberto',
    age: 19,
    occupation: Occupation.Padeiro
};

let pessoa3: Person = {
    name: 'laura',
    age: 32,
    occupation: Occupation.Atriz
};

let pessoa4: Person = {
    name: "carlos",
    age: 19,
    occupation: Occupation.Padeiro
}