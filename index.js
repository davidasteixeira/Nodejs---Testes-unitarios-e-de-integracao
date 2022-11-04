import assert from 'node:assert/strict';

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      assert.strictEqual(valor, esperado);
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoTeste) => {
  try {
    funcaoTeste();

    console.log(`${titulo} passou`);
  } catch {
    console.error(`${titulo} não passou!!!`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
