<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
  ],
  typeSpeed: 50,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx6cOnWKWkxxp77giSE51XD9r2j4PEdyaW3zLFQDD6-67Bk1udMfuMBfArW8Hq1RBuwyw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
