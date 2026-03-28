const sum = (x: number, y: number): number => {
    return x + y;
};

sum(1, 1);


interface MathFunc {
    (x: number, y: number): number;
};

const newSum: MathFunc = (x: number, y: number): number => { //interface de funções
    return x + y;
};