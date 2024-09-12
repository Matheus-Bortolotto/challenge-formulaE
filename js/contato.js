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
  const boatoenviar = document.getElementById("boatoenviar");

  boatoenviar.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
  });
});

function toggleMenu() {
  const menuContent = document.getElementById("nav-menu-mobile-content");
  if (menuContent.style.display === "flex") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "flex";
  }
}
