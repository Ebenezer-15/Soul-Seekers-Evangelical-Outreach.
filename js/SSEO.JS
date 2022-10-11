// for nav.
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }

  // for footer date

 const d = new Date("July 21, 1983 01:15:00");
let year = d.getFullYear();
document.getElementById("date").innerHTML = year;