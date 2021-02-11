



function draw() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");

      ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
      ctx.fillRect(190, 300, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(600, 200, 50, 50);

      ctx.fillStyle = 'rgba(89, 0, 250, 0.5)';
      ctx.fillRect(800, 100, 50, 50);

      ctx.fillStyle = 'rgba(2, 56, 100, 0.5)';
      ctx.fillRect(1000, 400, 50, 50);

      ctx.fillStyle = 'rgba(2, 90, 150, 0.5)';
      ctx.fillRect(1500, 300, 50, 50);
    }
  }