<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>2D Sonnensystem mit Infoanzeige</title>
<link rel="stylesheet" href="solar_system_styles.css">
</head>
<body>
<div id="canvasContainer">
  <canvas id="canvas" width="1000" height="800"></canvas>
</div>
<div id="infoContainer">
  <img id="infoImage" src="" alt="Himmelskörper Bild" />
  <p id="infoText">Klicke auf einen Himmelskörper für Details</p>
</div>
<div id="speedControl">
  Geschwindigkeit: <input type="range" id="speedRange" min="0.1" max="2" step="0.1" value="1">
</div>
<script src="solar_system_script.js"></script>
</body>
</html>
