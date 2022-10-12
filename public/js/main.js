// STICKY NAV BAR
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});

//CONTACT BUTTONS (CIRCULAR TEXT BUTTONS)

const textButton = document.querySelectorAll(".contact__btn");
textButton.forEach((textButton) => {
  let text = textButton.querySelector("p");

  text.innerHTML = text.innerHTML
    .split('')
    .map(
      (character, index) =>
        `<span style="transform: rotate(${index * 12}deg)">${character}</span>`
    )
    .join('');
});

// open & close NAV MENU

const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const menu = document.querySelector('nav .container ul')


//open sidebar

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block'
  closeBtn.style.display = 'block'
})

//close sidebar
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none'
  closeBtn.style.display = 'none'
})