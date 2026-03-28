const returnValue = (value: any) => value; //função reduzida com parâmetro.

const message = returnValue("Hello World");
const count = returnValue(5);


const returnValue2 = <T>(value: T): T => value; //função reduzida: passar tipo como parâmetro também...

const message2 = returnValue2<string>("Hello World");
const count2 = returnValue2<number>(5);

function getFirstValueFromArray(array: any) { //função comum
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray(["1", "2"]);


function getFirstValueFromArray2<T>(array: T[]) {
    return array[0];
}

const firstValueFromStringArray2 = getFirstValueFromArray2<string>(["1", "2"]);


const returnPromise = async (): Promise<number> => { //função assíncrona com generics.
    return 5;
}

class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number) => {
    return x + y;
});