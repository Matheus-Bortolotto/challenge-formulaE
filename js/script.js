const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".rolagem");

elements.forEach((element) => myObserver.observe(element));

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
