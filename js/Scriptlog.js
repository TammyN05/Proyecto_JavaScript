const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

const user = "User"
const contra = "finde2022"

function acceder() {
  localStorage.setItem("Usuario", document.getElementById("usuario").value);
  localStorage.setItem("Contraseña", document.getElementById("contraseña").value);
  if ((localStorage.getItem("Usuario") == user) && (localStorage.getItem("Contraseña") == contra)) {
    location.href="espectaculos.html";
  } else {
    alert("El usuario o la contraseña no son los correctos...Por favor intentelo de nuevo");
  }
};

document.getElementById("mostrar").innerHTML = localStorage.getItem("Usuario");

