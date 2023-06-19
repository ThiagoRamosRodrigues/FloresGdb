<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<html>

 <?php

$dbhost ='localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName ='flores_gdb';
$conexao = new mysqli($dbhost,$dbUsername,$dbPassword,$dbName);

if($conexao-> connect_errno){
    echo "erro";
}else{
    echo "Conexão efetuada com sucesso";
}

$cpf = $_POST['cpf'];
$cpf =mysqli_real_escape_string($conexao,$cpf);
$sql = "SELECT cpf FROM flores_gdb.usuarios  WHERE cpf = '$cpf'";
$retorno = mysqli_query($conexao, $sql);
if(mysqli_num_rows($retorno)>0){
    echo'CPF JA CADASTRADO!<BR>';
} else{
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $datanascimento = $_POST['datanascimento'];
    $genero = $_POST['sexo'];
    $telefone = $_POST['telefone'];
    $cidade = $_POST['cidade'];
    $estado = $_POST['estado'];
    $endereco =  $_POST['endereco'];
    $senha = $_POST['senha'];

   $sql = "INSERT INTO flores_gdb.usuarios(nome,cpf,email,datanascimento,genero,telefone,cidade,estado,endereco,senha) 
    VALUES ('$nome','$cpf','$email','$datanascimento','$genero','$telefone','$cidade ','$estado','$endereco', '$senha')";
    $resultado = mysqli_query($conexao,$sql);
    echo "USUARIO CADASTRADO COM SUCESSO!";
}


 ?>

</html>
</body>