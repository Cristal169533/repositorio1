<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validador de Correo Electrónico</title>
  <script>
    function validarCorreo() {
  
      var correo = document.getElementById("correo").value;

      if (correo.indexOf('@') === -1) {
        alert("La cadena debe contener el carácter '@'.");
        return false;
      }

      // Verificar las terminaciones
      if (correo.endsWith('.com') || correo.endsWith('.com.mx') || correo.endsWith('.mx')) {
        alert("La cadena es un correo electrónico válido.");
        return true;
      } else {
        alert("La cadena no es un correo electrónico válido.");
        return false;
      }
    }
  </script>
</head>
<body>

  <h2>Validador de Correo Electrónico</h2>

  <label for="correo">Ingrese un correo electrónico:</label>
  <input type="text" id="correo" name="correo" required>
  <br>
  <button onclick="validarCorreo()">Validar</button>

</body>
</html>