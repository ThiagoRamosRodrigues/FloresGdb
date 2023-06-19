<?php
// Configurações do banco de dados
$dbhost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbname = 'flores_gdb';
$conexao = new mysqli($dbhost, $dbUsername, $dbPassword, $dbname);

if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}

// Variável para armazenar a mensagem de erro
$error_message = '';

// Processamento do formulário de login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $senha = $_POST['senha'];

    // Consulta SQL para verificar o login e senha no banco de dados
    $sql = "SELECT * FROM usuarios WHERE nome = '$login' AND senha = '$senha'";
    $result = $conexao->query($sql);

    // Verificar se o login e a senha correspondem ao usuário administrador
    if ($login == 'Admin' && $senha == '4321') {
        // Login de administrador bem-sucedido
        echo "Login de administrador bem-sucedido";
        // Redirecionar para a página do administrador
        header("Location: ad.html");
        //exit;
    } else {
        $error_message = "Login ou senha inválidos.";
        echo  "$error_message" ;
    }
}

// Fechar conexão com o banco de dados
$conexao->close();
?>
