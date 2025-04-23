function mostrarMatriz(tfmat, id) {
    const container = document.getElementById(id);
    container.innerHTML = "";
    tfmat.array().then(array => {
      const table = document.createElement("table");
      array.forEach(fila => {
        const tr = document.createElement("tr");
        fila.forEach(valor => {
          const td = document.createElement("td");
          td.textContent = Math.round(valor * 100) / 100;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
      container.appendChild(table);
    });
  }
  
  function generarMatrices() {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
  
    // Generar matrices aleatorias del 1 al 20 con TensorFlow
    const mat1 = tf.randomUniform([filas, columnas], 1, 21, 'int32');
    const mat2 = tf.randomUniform([filas, columnas], 1, 21, 'int32');
  
    mostrarMatriz(mat1, "matriz1");
    mostrarMatriz(mat2, "matriz2");
  
    // Suma con TensorFlow
    const suma = tf.add(mat1, mat2);
    mostrarMatriz(suma, "suma");
  
    // Multiplicación de matrices
    // (solo válida si columnas de mat1 == filas de mat2) 
    if (columnas === filas) {
      const producto = tf.matMul(mat1, mat2);
      mostrarMatriz(producto, "producto");
    } else {
      document.getElementById("producto").innerText = "No se puede multiplicar por propiedades de la Matriz)";
    }
  }
  