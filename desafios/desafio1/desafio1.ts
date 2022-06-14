// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

//Resolução:

let employee = {
    code: 10,
    name: "John"
};

//ou

let employee2: {code: number, name: string} = {
    code: 10,
    name: "John"
};

//ou

interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 10,
    name: "John"
};