const navBar = document.querySelector(".navbar");
const offcanvas = document.querySelector(".offcanvas.offcanvas.show");
const links = document.querySelectorAll(".nav-link");
const img = document.querySelector(".services-img");
// ============================================== navbar
const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasNavbar");

const handelScroll = () => {
  if (window.scrollY > 150) {
    navBar.classList.add("nav-scrolled");
  } else {
    navBar.classList.remove("nav-scrolled");
  }
};

links.forEach((item) =>
  item.addEventListener("click", () => {
    bsOffcanvas.hide();
  })
);

window.addEventListener("scroll", handelScroll);
// ============================================== services
const images = {
  img1: ".././images/services/service1.webp",
  img2: ".././images/services/service2.webp",
  img3: ".././images/services/service3.webp",
  img4: ".././images/services/service4.webp",
};
function handleServices(item) {
  switch (item.id) {
    case "number-one":
      img.src = images.img1;

      break;
    case "number-two":
      img.src = images.img2;

      break;
    case "number-three":
      img.src = images.img3;

      break;
    case "number-four":
      img.src = images.img4;

      break;
    default:
      img.src = images.img1;

      break;
  }
}
// ============================================== counter (banner)

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += 1;
        obj.textContent = current + "+";
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 2786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 3110, 3000);
});

// ============================================== swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    991: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  },
});
