function validarLogin() {
    // Obtenemos los valores de los campos de texto
    var username = document.querySelector("input[name='username']").value;
    var password = document.querySelector("input[name='password']").value;
  
    // Validamos que los campos no estén vacíos
    if (username === "" || password === "") {
      alert("Los campos no pueden estar vacíos");
      return false;
    }
  
    // Guardamos los datos en variables
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
  
    // Redirigimos a la siguiente página
    window.location.href = "../subpages/proyecto1.html";
    return true;
  }
  
  document.querySelector("input[type='submit']").addEventListener("click", validarLogin);
  document.querySelector("span").innerHTML = window.localStorage.getItem("username");