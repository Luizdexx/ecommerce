// Abrir e Fechar o carrinho
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Iniciar quando o documento estiver pronto
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", iniciar);
} else {
  iniciar();
}

// Início
function iniciar() {
  adicionarEventos();
}

// Atualizar e re-renderizar 
function atualizar() {
  adicionarEventos();
  atualizarTotal();
}

// Adicionar eventos
function adicionarEventos() {
  // Remover itens do carrinho
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removerItemDoCarrinho);
  });

  // Alterar quantidade do item
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_alterarQuantidadeDoItem);
  });

  // Adicionar item ao carrinho
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_adicionarItemAoCarrinho);
  });

  // Comprar Pedido
  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_comprarPedido);
}

// ============= FUNÇÕES DE TRATAMENTO DE EVENTOS =============
let itensAdicionados = [];

function handle_adicionarItemAoCarrinho() {
  let produto = this.parentElement;
  let titulo = produto.querySelector(".product-title").innerHTML;
  let preco = produto.querySelector(".product-price").innerHTML;
  let imgSrc = produto.querySelector(".product-img").src;
  console.log(titulo, preco, imgSrc);

  let novoItem = {
    titulo,
    preco,
    imgSrc,
  };

  // Lidar com o item que já existe
  if (itensAdicionados.find((el) => el.titulo == novoItem.titulo)) {
    alert("Este item já existe!");
    return;
  } else {
    itensAdicionados.push(novoItem);
  }

  // Adicionar produto ao carrinho
  let elementoCaixaDoCarrinho = ComponenteCaixaDoCarrinho(titulo, preco, imgSrc);
  let novoNode = document.createElement("div");
  novoNode.innerHTML = elementoCaixaDoCarrinho;
  const conteudoDoCarrinho = cart.querySelector(".cart-content");
  conteudoDoCarrinho.appendChild(novoNode);

  atualizar();
}

function handle_removerItemDoCarrinho() {
  this.parentElement.remove();
  itensAdicionados = itensAdicionados.filter(
    (el) =>
      el.titulo !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  atualizar();
}

function handle_alterarQuantidadeDoItem() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); // para mantê-lo como número inteiro

  atualizar();
}

function handle_comprarPedido() {
  if (itensAdicionados.length <= 0) {
    alert("Ainda não há pedido para fazer. Por favor, faça um pedido.");
    return;
  }
  const conteudoDoCarrinho = cart.querySelector(".cart-content");
  conteudoDoCarrinho.innerHTML = "";
  alert("Seu pedido foi realizado com sucesso :)");
  itensAdicionados = [];

  atualizar();
}

// =========== FUNÇÕES DE ATUALIZAÇÃO E RERENDERIZAÇÃO =========
function atualizarTotal() {
  let caixasDoCarrinho = document.querySelectorAll(".cart-box");
  const elementoTotal = cart.querySelector(".total-price");
  let total = 0;
  caixasDoCarrinho.forEach((caixaDoCarrinho) => {
    let elementoPreco = caixaDoCarrinho.querySelector(".cart-price");
    let preco = parseFloat(elementoPreco.innerHTML.replace("$", ""));
    let quantidade = caixaDoCarrinho.querySelector(".cart-quantity").value;
    total += preco * quantidade;
  });

  // manter 2 dígitos após o ponto decimal
  total = total.toFixed(2);
  // ou você também pode usar
  // total = Math.round(total * 100) / 100;

  elementoTotal.innerHTML = "$" + total;
}

// ============= COMPONENTES HTML =============
function ComponenteCaixaDoCarrinho(titulo, preco, imgSrc) {
  return `
    <div class="cart-box">
        <img src=${imgSrc} alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${titulo}</div>
            <div class="cart-price">${preco}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- Remover do carrinho -->
        <i class='bx bxs-trash-alt cart-remove'></i>
    </div>`;
}
//Botçao de curtida
const botoesCurtida = document.querySelectorAll('.product-box i.bxs-heart');
//Adicionar um evento de clique a cada botão
botoesCurtida.forEach(botao => {
  botao.addEventListener('click', () => {
    //Alternar entre as classes 'curtido' e 'não-curtido'
    botao.classList.toggle('curtido');
    botao.classList.toggle('nao-curtido');
  });
});

// Seletor para o botão de Modo Escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Seletor para o elemento <body> ou outra parte do seu site que você deseja alternar entre os estilos
const body = document.body;

// Adicione um evento de clique ao botão
darkModeToggle.addEventListener('click', () => {
    // Alternar entre os estilos de tema claro e tema escuro
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});







