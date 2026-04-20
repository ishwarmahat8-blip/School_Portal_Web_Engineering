const path = window.location.pathname;

let basePath = "..";

fetch(`${basePath}/components/navbar.html`)
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });