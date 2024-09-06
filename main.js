// Classe combustivel e Classe venda
// Objetos: Gasolina comum, aditivada ou premium; Etanol; Diesel
// Pagamento: Dinheiro, pix, cartão
// Salvar vendas para que possa ser consultado
// Metodos para calcular o total da venda (litros * preço)

class Combustivel {
    constructor(tipo, precoPorLitro) {
        this.tipo = tipo;
        this.precoPorLitro = precoPorLitro;
    }
}

class Venda {
    constructor(combustivel, litros, metodoPagamento) {
        this.combustivel = combustivel;
        this.litros = litros;
        this.metodoPagamento = metodoPagamento;
        this.total = this.calcularTotal();
    }

    calcularTotal() {
        return this.litros * this.combustivel.precoPorLitro;
    }
}

class PostoCombustivel {
    constructor() {
        this.vendas = [];
    }

    registrarVenda(combustivel, litros, metodoPagamento) {
        const venda = new Venda(combustivel, litros, metodoPagamento);
        this.vendas.push(venda);
        return venda;
    }

    consultarVendas() {
        return this.vendas;
    }
}

// Exemplo de uso
const gasolinaComum = new Combustivel("Gasolina Comum", 5.50);
const gasolinaAditivada = new Combustivel("Gasolina Aditivada", 6.00);
const etanol = new Combustivel("Etanol", 4.00);
const diesel = new Combustivel("Diesel", 4.50);

const posto = new PostoCombustivel();

// Registrar vendas
posto.registrarVenda(gasolinaComum, 10, 'Dinheiro');
posto.registrarVenda(etanol, 20, 'Pix');
posto.registrarVenda(diesel, 15, 'Cartão');

// Consultar vendas
const vendas = posto.consultarVendas();
vendas.forEach(venda => {
    console.log(`Combustível: ${venda.combustivel.tipo}, Litros: ${venda.litros}, Pagamento: ${venda.metodoPagamento}, Total: R$${venda.total.toFixed(2)}`);
});
