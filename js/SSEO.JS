// for nav.
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  }

  // for footer date
//  const year = document.getElementById("date");
//  let dynamicYear = currentDate.getFullYear();
//  year.innerHTML = dynamicYear;
 const year = document.getElementById("year");

 let eachYear = currentDate.getFullYear();

 year.innerHTML =  eachYear;