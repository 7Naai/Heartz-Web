  function validarLogin() {
    const email = document.getElementById('floatingInput').value.trim();
    const password = document.getElementById('floatingPassword').value.trim();
    const errorMsg = document.getElementById('mensaje-error');

    if (email === "" || password === "") {
      errorMsg.textContent = "Por favor completa todos los campos";
      errorMsg.style.display = "block";
      return;
    }

    if (email === "admin@correo.com" && password === "1234") {
      window.location.href = "admin.html";
      
    } else {
      errorMsg.textContent = "Correo o contraseña incorrectos";
      errorMsg.style.display = "block";
    }
  }
