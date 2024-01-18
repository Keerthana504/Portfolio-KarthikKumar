var tabLinks = document.querySelectorAll(".tab-links");
var tabContents = document.querySelectorAll(".tab-contents");

const openTab = (tabName) => {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
    console.log("removed tab");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
    console.log("removed content");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

var sideMenu = document.querySelector("#sideMenu");

const openMenu = () => {
  sideMenu.style.right = `0`;
};

const closeMenu = () => {
  sideMenu.style.right = `-200px`;
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxo8aVrLmxDYgt9aGCX0q0bE2Zm_RWhPCE5mpsX_zHIWoKICJNfqCw_WmDeI-HhfZuY/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // console.log("Success!", response)
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
