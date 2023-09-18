function acessar() {
  try {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;

    if (!nome || !senha) {
      throw new Error("Por favor, preencha todos os campos.");
    } else if (nome === 'usuario1' && senha === 'usuario1') {
      sessionStorage.setItem('nomeUsuario', nome);
      alert(`Olá, seja bem-vindo ${nome}!`);
      window.location.href = "pagina_principal.html";
    } else {
      alert("Você não possui cadastro, por favor crie uma conta.");
    }
  } catch (error) {
    alert(error.message);
  }
}


document.getElementById('botao-acessar').addEventListener('click', acessar);



// Adicionar um evento de clique ao botão "olho"
document.getElementById("olho").addEventListener("click", function() {
  var campoSenha = document.getElementById("senha");
  var olho = document.querySelector("#olho i");

  // Alternar o tipo do campo de senha entre "password" e "text"
  if (campoSenha.type === "password") {
    campoSenha.type = "text";
    olho.classList.remove("fa-eye-slash");
    olho.classList.add("fa-eye");
  } else {
    campoSenha.type = "password";
    olho.classList.remove("fa-eye");
    olho.classList.add("fa-eye-slash");
  }
});



