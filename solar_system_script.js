(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const infoImage = document.getElementById('infoImage');
  const infoText = document.getElementById('infoText');
  const speedControl = document.getElementById('speedRange');

  let speedMultiplier = parseFloat(speedControl.value);
  let zoom = 1;

  const planetImages = {
    "Sonne": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg"
  };

  const planetInfo = {
    "Sonne": "Die Sonne ist der Mittelpunkt unseres Sonnensystems und eine heiße Gasmasse, hauptsächlich bestehend aus Wasserstoff und Helium."
  };

  const objectsData = [
    { name: "Sonne", x: 0, y: 0, radius: 30, color: "yellow" }
  ];

  speedControl.addEventListener('input', () => {
    speedMultiplier = parseFloat(speedControl.value);
  });

  canvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    zoom += event.deltaY * -0.001;
    zoom = Math.min(Math.max(0.5, zoom), 3);
  });

  canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (event.clientX - rect.left - canvas.width / 2) / zoom;
    const my = (event.clientY - rect.top - canvas.height / 2) / zoom;

    objectsData.forEach(obj => {
      const dx = mx - obj.x;
      const dy = my - obj.y;
      if (Math.sqrt(dx * dx + dy * dy) <= obj.radius) {
        infoImage.src = planetImages[obj.name] || "";
        infoText.textContent = planetInfo[obj.name] || "Keine Informationen verfügbar";
      }
    });
  });

  function drawPlanets() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(zoom, zoom);

    objectsData.forEach(obj => {
      ctx.beginPath();
      ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
      ctx.fillStyle = obj.color;
      ctx.fill();
      ctx.fillText(obj.name, obj.x - obj.radius, obj.y - obj.radius - 5);
    });

    ctx.restore();
  }

  function animate() {
    drawPlanets();
    requestAnimationFrame(animate);
  }

  animate();
})();
