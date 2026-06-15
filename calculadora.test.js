const calculadora = require('./calculadora');

describe('Calculadora', () => {
  
  test('deve somar dois números', () => {
    expect(calculadora.soma(2, 3)).toBe(5);
  });

  test('deve subtrair dois números', () => {
    expect(calculadora.subtracao(5, 3)).toBe(2);
  });

  test('deve multiplicar dois números', () => {
    expect(calculadora.multiplicacao(4, 3)).toBe(12);
  });

  test('deve dividir dois números', () => {
    expect(calculadora.divisao(10, 2)).toBe(5);
  });

  test('deve retornar Infinity ao dividir por zero', () => {
    expect(calculadora.divisao(10, 0)).toBe(Infinity);
  });

});