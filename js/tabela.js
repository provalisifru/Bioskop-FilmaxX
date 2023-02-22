let imejl = localStorage.getItem("email");
let brTelefona = localStorage.getItem("telefon");
let imeFilma = localStorage.getItem("imefilma");
let brKarata = localStorage.getItem("brojKarata");
let izabranTermin = localStorage.getItem("izabraniTermin");

localStorage.clear();

document.getElementById("imejl").innerHTML = imejl;
document.getElementById("brTelefona").innerHTML = brTelefona;
document.getElementById("imeFilmaa").innerHTML = imeFilma;
document.getElementById("brKarata").innerHTML = brKarata;
document.getElementById("termFilma").innerHTML = izabranTermin;

function deleteData() {
  localStorage.clear();
  document.getElementById("imejl").innerHTML = " ";
  document.getElementById("brTelefona").innerHTML = " ";
  document.getElementById("imeFilmaa").innerHTML = " ";
  document.getElementById("brKarata").innerHTML = " ";
  document.getElementById("termFilma").innerHTML = " ";
}
