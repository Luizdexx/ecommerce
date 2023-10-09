//Array de imagens para o carrossel
const images = [
    {'id': '1', 'url':'./img/Relogio2.png'},
    {'id': '2', 'url':'./img/Relogio.png '},
    {'id': '3', 'url':'./img/Relogio3.png'},
    {'id': '4', 'url':'./img/Relogio4.png'},
]
//Seleciona o cotainer de itens do carrossel
const container = document.querySelector('.container-items');
//Preenche o container  
for (const image of images) {
      container.innerHTML += `
      <div class='item'>
         <img src='${image.url}'
        </div>
        `
  }
// Seleciona todos itens do carrossel
  let items = document.querySelectorAll('.item');
  // Event listener para o botão "Proximo"
  document.querySelector('#next').addEventListener('click', ()=>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    });
// Event listener para o botão "Anterior"
  document.querySelector('#previous').addEventListener('click', () =>{
    const lastItem = items[items.length - 1];
    container.insertBefore(lastItem, items[0] );
    items = document.querySelectorAll('.item');
  });
// Event listener para o botão "Comprar"
 // document.getElementById("comprarButton").addEventListener("click", function() {
   // window.location.href = "seiko.html";
  //}); Depois tirar
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







