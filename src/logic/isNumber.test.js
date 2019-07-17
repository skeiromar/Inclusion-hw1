import isNumber from './isNumber';



test('should return true when input is a number', () => {
    expect(isNumber(12)).toBe(true);
});

test('should return false when input is not a number', () => {
    expect(isNumber("test")).toBe(false);    
});


test('should return false when input is undefined', () => {
    expect(isNumber(undefined)).toBe(false);    
});

test('should return false when there is no input', () => {
   expect(isNumber()).toBe(false); 
});
