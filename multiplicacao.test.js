const multiplicacao = require('./multiplicacao');

test('Deve multiplica dois valores', () => {
    expect(multiplicacao(2, 3)).toBe(6);
});

test('Deve multiplicar números decimais', () => {
    expect(multiplicacao(2.5, 4)).toBe(10);
});

test('Deve multiplicar números negativos', () => {
    expect(multiplicacao(-2, 3)).toBe(-6);
});
