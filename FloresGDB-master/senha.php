<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperar Senha PHP</title>
</head>
<body>
<?php
// Configurações do banco de dados
$dbhost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbname = 'flores_gdb';
$conexao = new mysqli($dbhost, $dbUsername, $dbPassword, $dbname);

// Verifica se o formulário de recuperação de senha foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Captura o e-mail, telefone e CPF fornecidos pelo usuário
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $cpf = $_POST['cpf'];

    // Verifica se o e-mail, telefone e CPF existem no banco de dados
    $stmt = $conexao->prepare("SELECT senha FROM usuarios WHERE email = ? AND telefone = ? AND cpf = ?");
    $stmt->bind_param("sss", $email, $telefone, $cpf);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        // Dados de autenticação incorretos, exibe uma mensagem de erro
        echo "Dados de autenticação incorretos.";
    } else {
        // Dados de autenticação corretos, recupera a senha do banco de dados
        $row = $result->fetch_assoc();
        $senha = $row['senha'];

        // Exibe a senha recuperada
        echo "Sua senha é: " . $senha;
    }

    // Fecha a conexão com o banco de dados
    $conexao->close();
} else {
    echo "Formulário não enviado.";
}
?>

</body>
</html>
