const close = document.querySelector("#close");
const nav = document.querySelector("#nav");
const iii_dot = document.querySelector("#mobile_nav_3dot");
const outside_of_navber = document.querySelector(".outside-of-navber");
const nav_item = document.querySelectorAll(".nav_link");
//

//

//

let closer_arr = [close, outside_of_navber, ...nav_item];

//

//

//

//

iii_dot.addEventListener("click", () => {
  iii_dot.classList.add("animation");
  nav.style.transform = "translateX(0)";
  outside_of_navber.classList.add("clicked");
});

closer_arr.map((item) => {
  item.addEventListener("click", (e) => {
    nav.style.transform = "translateX(-999px)";
    iii_dot.classList.remove("animation");
    outside_of_navber.classList.remove("clicked");
  });
});
