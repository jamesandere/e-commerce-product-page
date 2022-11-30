const smallImages = document.getElementsByClassName("img-small");
const thumbnails = document.getElementsByClassName("thumb");
const mainImage = document.getElementById("img-main");
const cartDecrement = document.getElementById("cart-decrement");
const cartIncrement = document.getElementById("cart-increment");
const cartNumber = document.getElementById("cart-number");
const links = document.getElementsByClassName("links");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const backDrop = document.getElementsByClassName("backdrop");
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slide = document.querySelector(".slide");
const imageSlides = document.querySelectorAll(".img-slide");

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");

    thumbnails[i].classList.add("active");
    mainImage.src = "images/image-product-" + (i + 1) + ".jpg";
  });
}

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("active-img");
    current[0].className = current[0].className.replace(" active-img", "");
    smallImages[i].classList.add("active-img");
  });
}

cartIncrement.addEventListener("click", () => {
  cartNumber.innerHTML = parseInt(cartNumber.innerHTML) + 1;
});

cartDecrement.addEventListener("click", () => {
  if (parseInt(cartNumber.innerHTML) > 0) {
    cartNumber.innerHTML = parseInt(cartNumber.innerHTML) - 1;
  }
});

menuOpen.addEventListener("click", () => {
  links[0].classList.add("menu-active");
  menuOpen.classList.add("active");
  menuClose.classList.add("active");
  backDrop[0].classList.add("active");
});

menuClose.addEventListener("click", () => {
  links[0].classList.remove("menu-active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backDrop[0].classList.remove("active");
});

backDrop[0].addEventListener("click", () => {
  links[0].classList.remove("menu-active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backDrop[0].classList.remove("active");
});

next.addEventListener("click", () => {
  slide.style.scrollBehavior = "smooth";

  if (slide.scrollLeft < (imageSlides.length - 1) * slide.offsetWidth) {
    slide.scrollLeft += slide.offsetWidth;
  }
});

prev.addEventListener("click", () => {
  if (slide.scrollLeft > 0) {
    slide.scrollLeft -= slide.offsetWidth;
  }
});
