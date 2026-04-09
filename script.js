let total = 0;
let carrinho = "";

function adicionar() {

    let produto = document.querySelector('input[name="produto"]:checked');
    let quantidade = document.getElementById("quantidade").value;

    if (produto == null) {
        alert("Escolha um sorvete!");
        return;
    }

    if (quantidade <= 0 || quantidade == "") {
        alert("Digite uma quantidade válida!");
        return;
    }

    let preco = 0;
    let nomeProduto = "";

    switch (produto.value) {

        case "casquinhaMorango":
            preco = 5;
            nomeProduto = "Casquinha de Morango 🍓";
            break;

        case "casquinhaChocolate":
            preco = 5;
            nomeProduto = "Casquinha de Chocolate 🍫";
            break;

        case "casquinhaBaunilha":
            preco = 5;
            nomeProduto = "Casquinha de Baunilha 🍦";
            break;

        case "milkshake":
            preco = 10;
            nomeProduto = "Milkshake 🥤";
            break;

        case "sundae":
            preco = 12;
            nomeProduto = "Sundae 🍨";
            break;
    }

    let subtotal = preco * quantidade;

    total += subtotal;

    carrinho += nomeProduto + " - " + quantidade + "x = R$ " + subtotal + "<br>";

    document.getElementById("lista").innerHTML = carrinho;
    document.getElementById("total").innerHTML = "Total: R$ " + total;
}


function mostrarParcelas() {

    let pagamento = document.querySelector('input[name="pagamento"]:checked').value;

    switch (pagamento) {

        case "4":
            document.getElementById("parcelasBox").style.display = "block";
            break;

        default:
            document.getElementById("parcelasBox").style.display = "none";
            break;
    }

}


function confirmarPagamento() {

    let pagamento = document.querySelector('input[name="pagamento"]:checked');

    if (pagamento == null) {
        alert("Escolha um pagamento!");
        return;
    }

    let mensagem = "";

    switch (pagamento.value) {

        case "1":
            mensagem = "Pagamento em Dinheiro 💵";
            break;

        case "2":
            mensagem = "Pagamento via Pix 📱";
            break;

        case "3":
            mensagem = "Pagamento no Débito 💳";
            break;

        case "4":
    let parcelas = parseInt(document.getElementById("parcelas").value);

        if (isNaN(parcelas) || parcelas < 1) {
            parcelas = 1;
            }

        if (parcelas > 3) {
            alert("Você só pode parcelar em até 3x!");
            return;
            }

        mensagem = "Pagamento no Crédito em " + parcelas + "x 💳";
            break;
            }

    document.getElementById("detalhesPagamento").innerHTML = mensagem;

}


function finalizar() {

    if (total == 0) {
        alert("Carrinho vazio!");
        return;
    }

    alert("Compra finalizada com sucesso! 🍦");

    total = 0;
    carrinho = "";

    document.getElementById("lista").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    document.getElementById("detalhesPagamento").innerHTML = "";

}