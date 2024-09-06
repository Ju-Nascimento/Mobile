//Teste de calculadora registradora de combustivel web, por enquanto sem detalhes visuais pois 
// é apenas um teste 

// Lista de preços dos combustíveis
const precosCombustiveis = {
    "Gasolina Comum": 5.50,
    "Gasolina Aditivada": 6.00,
    "Etanol": 4.00,
    "Diesel": 4.50
};

// Seleciona os elementos do DOM
const form = document.getElementById("vendaForm");
const listaVendas = document.getElementById("listaVendas");
const semVendas = document.getElementById("semVendas");

// Array para armazenar as vendas
let vendas = [];

// Função para adicionar venda
function registrarVenda(combustivel, litros, pagamento) {
    const precoPorLitro = precosCombustiveis[combustivel];
    const total = litros * precoPorLitro;

    // Cria objeto de venda
    const venda = {
        combustivel,
        litros,
        pagamento,
        total
    };

    // Adiciona a venda ao array
    vendas.push(venda);
    atualizarVendas();
}

// Função para atualizar a exibição de vendas
function atualizarVendas() {
    // Limpa a lista atual
    listaVendas.innerHTML = "";

    if (vendas.length === 0) {
        semVendas.style.display = "block";
        return;
    }

    semVendas.style.display = "none";

    // Adiciona cada venda à lista
    vendas.forEach((venda, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. Combustível: ${venda.combustivel}, Litros: ${venda.litros}, Pagamento: ${venda.pagamento}, Total: R$${venda.total.toFixed(2)}`;
        listaVendas.appendChild(li);
    });
}

// Lida com o evento de submissão do formulário
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const combustivel = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    const pagamento = document.getElementById("pagamento").value;

    if (litros > 0) {
        registrarVenda(combustivel, litros, pagamento);
        form.reset(); // Reseta o formulário após registrar a venda
    } else {
        alert("Por favor, insira uma quantidade válida de litros.");
    }
});
