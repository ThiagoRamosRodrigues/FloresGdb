function toggleChatbot() {
  var chatbotWindow = document.getElementById('chatbot-window');
  chatbotWindow.classList.toggle('hidden');
}
  function sendMessage() {
  var message = document.getElementById('message-input');
  if (!message.value) {
    message.style.border = '1px solid red';
    return;
  }
  message.style.border = 'none';

  var status = document.getElementById('status');
  var btnSubmit = document.getElementById('btn-submit');

  status.style.display = 'block';
  status.innerHTML = 'Carregando...';
  btnSubmit.disabled = true;
  btnSubmit.style.cursor = 'not-allowed';
  message.disabled = true;

  var botResponse;
  var userMessage = message.value.toLowerCase();

  // Processar a mensagem do usuário e gerar a resposta do chatbot
  switch (userMessage) {
    case '1':
      botResponse = ' A lista dos nossos produtos estão no menu principal, você tambem pode conferir no nosso filtro por categorias';
      break;
    case '2':
      botResponse = ' Oferecemos diversas formas de pagamento para sua conveniência. Você pode escolher entre as seguintes opções: Pix, boleto, Cartão de credito e debito ';
      break;
    case '3':
      botResponse = ' Regue suas flores regularmente, garantindo a quantidade adequada de água para cada tipo de planta Utilize adubos específicos para flores e siga as instruções de dosagem recomendadas Mantenha as flores em uma temperatura adequada, evitando extremos de calor ou frio';
      break;
      case '4':
        botResponse ='Olá, nossas promoções estão chegando. Fique atento para receber um e-mai, caso não tenha você pode criar no botão LOGIN.';
        break;
    default:
      botResponse = 'Desculpe, não entendi. Poderia reformular a pergunta?';
  }

  // Adicionar a resposta do chatbot ao histórico
  showHistory(message.value, botResponse);

  status.style.display = 'none';
  btnSubmit.disabled = false;
  btnSubmit.style.cursor = 'pointer';
  message.disabled = false;
  message.value = '';
}

function showHistory(message, response) {
  var historyBox = document.getElementById('history');

  // My message
  var boxMyMessage = document.createElement('div');
  boxMyMessage.className = 'box-my-message';

  var myMessage = document.createElement('p');
  myMessage.className = 'my-message';
  myMessage.innerHTML = message;

  boxMyMessage.appendChild(myMessage);

  historyBox.appendChild(boxMyMessage);

  // Response message
  var boxResponseMessage = document.createElement('div');
  boxResponseMessage.className = 'box-response-message';

  var chatResponse = document.createElement('p');
  chatResponse.className = 'response-message';
  chatResponse.innerHTML = response;

  boxResponseMessage.appendChild(chatResponse);

  historyBox.appendChild(boxResponseMessage);

  // Levar scroll para o final
  historyBox.scrollTop = historyBox.scrollHeight;
}
// função para o carrinho
var addToCartBtn = document.querySelector('.add-to-cart-btn');
var cartCounter = document.getElementById('cart-counter');
var cartCount = 0;

addToCartBtn.addEventListener('click', function(event) {
  event.preventDefault();

  cartCount++;
  cartCounter.textContent = cartCount;
});

var addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
var cartCounter = document.getElementById('cart-counter');

for (var i = 1; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', function(event) {
    event.preventDefault();

    var cartCount = parseInt(cartCounter.textContent) || 0;
    cartCount++;
    cartCounter.textContent = cartCount;
  });
}

//id produtos ao clicar em comprar
function addToCart(productId) {
  var cartCounter = document.getElementById('cart-counter');
  var cartCount = parseInt(cartCounter.textContent);

  cartCount++;
  cartCounter.textContent = cartCount;

  var cartItem = document.createElement('div');
  cartItem.textContent = productId;
  document.getElementById('cart-items').appendChild(cartItem);
}
var carrinhoAbrir = document.querySelector('.carrinho-abrir');

carrinhoAbrir.addEventListener('click', function(event) {
  event.preventDefault();
  var id = productID.textContent.split(':')[1].trim();
  console.log("ID do produto no carrinho: " + id);
});



