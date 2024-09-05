// Function to toggle the menu for mobile devices
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

// Function to toggle dropdown menu
function toggleDropdown() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}

function loadPage(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector(".content .container").innerHTML = html;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown > a")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
