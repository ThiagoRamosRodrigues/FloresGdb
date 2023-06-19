document.addEventListener("DOMContentLoaded", function() {


    // Função para adicionar um produto
function adicionarProduto() {

    var tituloAnuncio = document.getElementById("titulo-anuncio").value;
    var categoria = document.getElementById("categoria").value;
    var quantidadeEstoque = document.getElementById("quantidade-estoque").value;
    var valorProduto = document.getElementById("valor-produto").value;
    var disponibilidade = document.querySelector('input[name="disponibilidade"]:checked').value;
    var descricao = document.getElementById("descricao").value;

console.log("Produto adicionado:", tituloAnuncio, categoria, quantidadeEstoque, valorProduto, disponibilidade, descricao);
}


function editarProduto() {

   var tituloAnuncio = document.getElementById("titulo-anuncio").value;
   var categoria = document.getElementById("categoria").value;
   var quantidadeEstoque = document.getElementById("quantidade-estoque").value;
   var valorProduto = document.getElementById("valor-produto").value;
   var disponibilidade = document.querySelector('input[name="disponibilidade"]:checked').value;
   var descricao = document.getElementById("descricao").value;
    console.log("Editar produto");
}

// Vincule os botões aos eventos correspondentes
document.getElementById("btn-adicionar-produto").addEventListener("click", adicionarProduto);
document.getElementById("btn-editar-produto").addEventListener("click", editarProduto);

});
