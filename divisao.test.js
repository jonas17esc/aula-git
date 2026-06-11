const divisao = require('./divisao');

test('Deve dividir dois valores', () => {
    expect(divisao(10, 2)).toBe(5);
});

test('Deve dividir números decimais', () => {
    expect(divisao(5, 2)).toBe(2.5);
});

test('Deve dividir números negativos', () => {
    expect(divisao(-10, 2)).toBe(-5);
});