const HamburgerBtn = document.getElementById("hamBurger");
HamburgerBtn.addEventListener("click", function () {
  const ResponsiveRight = document.querySelector(".responsive");
  HamburgerBtn.classList.toggle("active");
  if (HamburgerBtn.classList.contains("active")) {
    ResponsiveRight.classList.add("active");
  } else {
    ResponsiveRight.classList.remove("active");
  }
});
