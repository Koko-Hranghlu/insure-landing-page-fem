const menu_btn = document.querySelector("nav button")
const menu_btn_img = menu_btn.querySelector("img")
const menu_links = document.querySelector("header ul")
menu_btn.addEventListener("click", () => {
  menu_links.classList.toggle("hidden")
  if (menu_btn_img.src.match("hamburger")) menu_btn_img.src = "images/icon-close.svg"
  else menu_btn_img.src = "images/icon-hamburger.svg"
})
