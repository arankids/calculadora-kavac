# calculadora-<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora Kavac Studio</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background: #f9f9f9; }
    .container { max-width: 400px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    h2 { text-align: center; color: #00796B; }
    label { display: block; margin-top: 10px; }
    input { width: 100%; padding: 8px; margin-top: 5px; border-radius: 4px; border: 1px solid #ccc; }
    .result { background: #E0F2F1; padding: 10px; margin-top: 20px; border-radius: 4px; }
    .result p { margin: 5px 0; }
    button { margin-top: 20px; width: 100%; padding: 10px; background: #00796B; color: #fff; border: none; border-radius: 4px; font-size: 16px; }
    button:hover { background: #005A4F; cursor: pointer; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Calculadora Kavac Studio</h2>
    <label>Alto (cm):<input type="number" id="alto" value="60"></label>
    <label>Ancho (cm):<input type="number" id="ancho" value="50"></label>
    <label>Precio impresión (CLP/m²):<input type="number" id="precioImpresion" value="7500"></label>
    <label>Precio lámina cartón (CLP por 2.4×1.2 m):<input type="number" id="precioCarton" value="8000"></label>
    <label>Precio silicón (3 barras):<input type="number" id="precioSilicon" value="1500"></label>
    <label>Transporte fijo (CLP):<input type="number" id="transporte" value="4000"></label>
    <label>Margen ganancia (%):<input type="number" id="margen" value="50"></label>
    <button onclick="calcular()">Calcular precio</button>
    <div class="result" id="resultado">
      <p><em>Calcula para ver el precio sugerido</em></p>
    </div>
  </div>

  <script>
    function calcular() {
      const alto = parseFloat(document.getElementById('alto').value) / 100;
      const ancho = parseFloat(document.getElementById('ancho').value) / 100;
      const area = alto * ancho;

      const precioImp = parseFloat(document.getElementById('precioImpresion').value);
      const precioImpTotal = area * precioImp;

      const precioCarton = parseFloat(document.getElementById('precioCarton').value);
      const areaLamina = 2.4 * 1.2;
      const precioCartonPorM2 = precioCarton / areaLamina;
      const precioCartonTotal = area * precioCartonPorM2;

      const precioSilicon = parseFloat(document.getElementById('precioSilicon').value) / 3;
      const precioTransporte = parseFloat(document.getElementById('transporte').value);

      const subtotal = precioImpTotal + precioCartonTotal + precioSilicon + precioTransporte;
      const margen = parseFloat(document.getElementById('margen').value) / 100;
      const ganancia = subtotal * margen;
      const total = subtotal + ganancia;

      document.getElementById('resultado').innerHTML = `
        <p><strong>Costo impresión:</strong> CLP ${precioImpTotal.toFixed(0)}</p>
        <p><strong>Costo cartón:</strong> CLP ${precioCartonTotal.toFixed(0)}</p>
        <p><strong>Costo silicón:</strong> CLP ${precioSilicon.toFixed(0)}</p>
        <p><strong>Transporte:</strong> CLP ${precioTransporte.toFixed(0)}</p>
        <p><strong>Subtotal:</strong> CLP ${subtotal.toFixed(0)}</p>
        <p><strong>Ganancia (${(margen*100).toFixed(0)}%):</strong> CLP ${ganancia.toFixed(0)}</p>
        <p><strong>Precio sugerido:</strong> CLP ${total.toFixed(0)}</p>
      `;
    }
  </script>
</body>
</html>
