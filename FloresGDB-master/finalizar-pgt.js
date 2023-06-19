
function buscarEndereco() {
    var cep = document.getElementById("cep-input").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
  
    fetch(url)
      .then(response => response.json())
      .then(data => exibirEndereco(data))
      .catch(error => console.log(error));
  }
  
  function exibirEndereco(data) {
    var enderecoDiv = document.getElementById("endereco");
    if (data.erro) {
      alert("CEP não encontrado.");
    } else {
      document.getElementById("logradouro-input").value = data.logradouro;
      document.getElementById("bairro-input").value = data.bairro;
      document.getElementById("cidade-input").value = data.localidade;
      document.getElementById("estado-input").value = data.uf;
    }
  }
  
  function mostrarOpcoesPagamento() {
    var metodoPagamento = document.getElementById("metodo-pagamento").value;
    var opcoesCartao = document.getElementById("opcoes-cartao");
    var opcoesBoletoPix = document.getElementById("opcoes-boleto-pix");
  
    if (metodoPagamento === "credito" || metodoPagamento === "debito") {
      opcoesCartao.style.display = "block";
      opcoesBoletoPix.style.display = "none";
    } else if (metodoPagamento === "boleto" || metodoPagamento === "pix") {
      opcoesCartao.style.display = "none";
      opcoesBoletoPix.style.display = "block";
    } else {
      opcoesCartao.style.display = "none";
      opcoesBoletoPix.style.display = "none";
    }
  }
  function exibirAlerta() {
    alert('Pagamento Confirmado');
  }
  


