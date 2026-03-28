type Order = {
    productId: string,
    price: number
};

type User = {
    firstName: string | null,
    age: number,
    email: string,
    password?: string,
    orders: Order[],
    register(): string
};


const user: User = { //instancia do tipo
    firstName: "caio",
    age: 25,
    email: "casadasdsa@asdas.com",
    password: "123h2fqioqf",
    orders: [{productId: "f2iuf", price: 1553}],
    register() {
        return "ata";
    }
};

const comboInstance: User & Order = {
    firstName: "caio",
    age: 25,
    email: "casadasdsa@asdas.com",
    password: "123h2fqioqf",
    register() {
        return "ata";
    },
    orders: [{productId: "f2iuf", price: 1553}],
    productId: "2fefe",
    price: 3675
}

interface UserInterface {
    readonly name: string,
    typeO: string
}

type Grade = number | string; //Tipo of tipos --> primitivo
const grade: Grade = 1;