import Item from "../item.js";

describe('Testes com classe Item', () => {
    it('Deve ter 3 campos: nome, valor e quantidade', () => {
        const item = new Item('Maça', 3.5, 2);

        expect(item.nome).toBe('Maça');
        expect(item.valor).toBe(3.5);
        expect(item.quantidade).toBe(2);
    });

    it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('Batata',0.1,3);

    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
    });
});
