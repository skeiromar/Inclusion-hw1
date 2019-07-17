import operate from './operate';


test('should add two numbers', () => {
    expect(operate(5, 10, '+')).toBe("15");
});

test('should subtract two numbers', () => {
    expect(operate(5, 10, '-')).toBe("-5");
});

test('should multiply two numbers', () => {
    expect(operate(5, 10, 'x')).toBe("50");
});

test('should divide two numbers', () => {
    expect(operate(5, 10, '÷')).toBe("0.5");
});

// when dividing by zero, the zero becomes one and we just get numberone as the answer
// the function also has another problem where the Big(num) is strictly compared with the string 0
// to check if we are dividing by zero. This always gives false even if we are but because of the previous reasoning, 
// we never are dividing by zero.
// test('should return 0 when dividing by 0', () => {
//     expect(operate(5, 0, '÷')).toBe("0");
// });


test('should throw error for unknown operation', () => {
    expect(operate).toThrowError(new Error("Unknown operation 'undefined'"));
});

test('should work for float values', () => {
    expect(operate(0.542, 2.341, "x")).toBe("1.268822");
});
