function switchButton() {
  const html = document.documentElement;
  // Substituir o modo
  html.classList.toggle("light");

  // Pegar tag da imagem
  const img = document.querySelector("#user img");

  // Substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg");
  } else {
    img.setAttribute("src", "./assets/avatar.jpeg");
  }
}
