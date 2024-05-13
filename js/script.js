document.addEventListener("DOMContentLoaded", function () {
  var tabela = document.getElementById("tabela-classificacao");
  var corpoTabela = document.getElementById("corpo-tabela");
  var mostrarMaisBtn = document.getElementById("mostrar-mais");
  var mostrarMenosBtn = document.getElementById("mostrar-menos");

  var linhasPorPagina = 10;
  var linhasExibidas = linhasPorPagina;

  function mostrarProximasLinhas() {
    for (var i = linhasExibidas; i < linhasExibidas + linhasPorPagina; i++) {
      if (corpoTabela.rows[i]) {
        corpoTabela.rows[i].style.display = "";
      }
    }
    linhasExibidas += linhasPorPagina;

    if (linhasExibidas >= corpoTabela.rows.length) {
      mostrarMaisBtn.style.display = "none";
    }
  }

  function mostrarMenosLinhas() {
    for (
      var i = linhasExibidas - 1;
      i >= linhasExibidas - linhasPorPagina;
      i--
    ) {
      if (corpoTabela.rows[i]) {
        corpoTabela.rows[i].style.display = "none";
      }
    }
    linhasExibidas -= linhasPorPagina;

    mostrarMaisBtn.style.display = "";
  }

  for (var i = linhasPorPagina; i < corpoTabela.rows.length; i++) {
    corpoTabela.rows[i].style.display = "none";
  }

  mostrarMaisBtn.addEventListener("click", mostrarProximasLinhas);

  mostrarMenosBtn.addEventListener("click", mostrarMenosLinhas);
});

const usuarios = [
  {
    login: "matheus",
    pass: "matheus",
  },
  {
    login: "luan",
    pass: "luan",
  },
  {
    login: "admin",
    pass: "admin",
  },
];

let botao = document.getElementById("btn-logar");

botao.addEventListener("click", function logar() {
  let pegaUsuario = document.getElementById("usuario").value;
  let pegaSenha = document.getElementById("senha").value;
  let validaLogin = false;

  for (let i in usuarios) {
    if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
      validaLogin = true;
      break;
    }
  }
  if (validaLogin == true) {
    window.location.assign = "index.html";
    alert("Sucesso");
  } else {
    alert("Usuário ou senha incorretos");
  }
});
