let total;
limpar();
function adicionar(){
    //Recuperar valores
    let itemAtual = document.getElementById('produto').value;
    let nomeProduto = itemAtual.split('-')[0];
    let valorProduto = itemAtual.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let campoTotal = document.getElementById('valor-total');

    //Calcular o preço (valor unitário * quantidade)
    let preco = quantidade * valorProduto;
    //Atualizar o valor total

    //Medida de segurança para impedir do usuário adicionar "0" ou "menos" produtos
    if (quantidade <= 0){
        alert(`Quantidade inválida! A quantidade deve ser maior do que 0 ou ${quantidade}`);
        return;
    }
    //Adicionar no carrinho
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
        </section>`;

    total = total + preco;
    campoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${total}</span>`
    
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}

