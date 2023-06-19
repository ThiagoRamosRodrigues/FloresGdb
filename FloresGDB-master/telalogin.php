<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> administrador PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<html>
<?php
// Configurações do banco de dados
$dbhost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbname = 'flores_gdb';
$conexao = new mysqli($dbhost,$dbUsername,$dbPassword,$dbname);

// Recupera os dados enviados pelo formulário de login
$login = $_POST['login']; // Pode ser CPF ou e-mail
$senha = $_POST['senha'];

// Verifica se houve algum erro na conexão
if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}

// Escapa caracteres especiais para prevenir ataques de SQL Injection
$login = mysqli_real_escape_string($conexao, $login);
$senha = mysqli_real_escape_string($conexao, $senha);

// Verifica se o usuário existe no banco de dados
$query = "SELECT * FROM usuarios WHERE (cpf = '$login' OR email = '$login') AND senha = '$senha'";
$result = $conexao->query($query);

if ($result->num_rows == 1) {
    // Login bem-sucedido
    echo "Login realizado com sucesso!";
    // Redirecionar para a página do USUSARIO
        header("Location: home.html");
} else {
    // Login inválido
    echo "Usuário ou senha incorretos.";
}

// Fecha a conexão com o banco de dados
$conexao->close();
?>
</html>
</body>