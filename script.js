function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;
  
    // Envoie les données à un serveur pour les stocker dans une base de données
    // Ici, nous simulons l'envoi avec une simple alerte
    alert("Nom : " + name + "\nE-mail : " + email + "\nDate : " + date + "\nHeure : " + time + "\nMessage : " + message);
  
    // Réinitialise le formulaire
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("message").value = "";
  }


//click menu
const menuIcon = document.querySelector('#menu-icon');
const mainNav = document.querySelector('#main-nav');

menuIcon.addEventListener('click', function() {
  mainNav.classList.toggle('show-nav');
});
