const Calculator = require('../js/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('should add two numbers correctly', () => {
            expect(calculator.add(2,3)).toBe(5);
        });

        it('should add negative numbers correctly', () => {
            expect(calculator.add(-2,-3)).toBe(-5);
        });

        it('should add a positive and a negative number correctly',() => {
            expect(calculator.add(5,-3)).toBe(2);
        });
    });

    describe('subtract', () => {
        it('should subtract two numbers correctly', () => {
            expect(calculator.subtract(5,3)).toBe(2);
        });

        it('should subtract negative numbers correctly', () =>{
            expect(calculator.subtract(-2,-3)).toBe(1);
        });

        it('should subtract a positive and a negative number correctly', () => {
            expect(calculator.subtract(5,-3)).toBe(8);
        });
    });

    describe('divide', () => {
        it('should divide two numbers correctly', ()=> {
            expect(calculator.divide(10,2)).toBe(5);
        });

        it('should throw an error when diving by zero', () =>{
            expect(() => calculator.divide(5,0)).toThrowError(
                "Division by zero is not allowed."
            );
        });

        it('should divide a negative number by a positive number correctly', ()=>{
            expect(calculator.divide(-10,2)).toBe(-5);
        });
    });

    describe('multiply', ()=> {
        it('should multiply two numbers correctly', () => {
            expect(calculator.multiply(2,3)).toBe(6);
        });

        it('should multiply a positive and a negative number correctly', ()=> {
            expect(calculator.multiply(-2,3)).toBe(-6);
        });

        it('should multiply zero by any number to be zero', () => {
            expect(calculator.multiply(0,5)).toBe(0);
        });
    });
});
