function saveData() {
  let email, telefon, imefilma, brojKarata;
  email = document.getElementById("email").value;
  telefon = document.getElementById("telefon").value;
  imefilma = document.getElementById("imefilma").value;
  brojKarata = document.getElementById("brojKarata").value;

  localStorage.setItem("email", email);
  localStorage.setItem("telefon", telefon);
  localStorage.setItem("imefilma", imefilma);
  localStorage.setItem("brojKarata", brojKarata);

  let termin = document.getElementsByClassName("termin");
  for (let i = 0; i < termin.length; i++) {
    if (termin[i].checked) {
      localStorage.setItem("izabraniTermin", termin[i].value);
    }
  }
}

function openmNavSlide() {
  document.getElementById("mNavSlide").style.width = "250px";
}

function closemNavSlide() {
  document.getElementById("mNavSlide").style.width = "0";
}
