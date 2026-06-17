const calculadora = {
    numero1: 25,
    numero2: 25,

    somar() {
        return this.numero1 + this.numero2;
    },

    subtrair() {
        return this.numero1 - this.numero2;
    },

    multiplicar() {
        return this.numero1 * this.numero2;
    },

    dividir() {
        return this.numero1 / this.numero2;
    }
}

console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());