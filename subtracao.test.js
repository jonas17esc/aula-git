const subtracao = require('./subtracao');

test('Deve subtrair dois valores', () => {
    expect(subtracao(5, 3)).toBe(2);
});

test('Deve subtrair números decimais', () => {
    expect(subtracao(5.5, 2)).toBe(3.5);
});

test('Deve resultar em número negativo', () => {
    expect(subtracao(2, 5)).toBe(-3);
});

test('Deve mostrar um erro no test', () => {
    // Exemplo simulando um cenário onde a função tenta subtrair uma string
    expect(subtracao(5, "a")).toBeNaN(); 
});