// ═══════════════════════════════════════════════════════════════════════════
//  One Dollar Guy — CONFETTI
//  Canvas confetti effect, triggered after successful payment.
//  Exposes: window.launchConfetti()
// ═══════════════════════════════════════════════════════════════════════════

(function(){
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  let pieces = [], raf = null, running = false;

  const COLORS = ['#ff2d78','#ff8c00','#ffe600','#00e5b0','#7c3aff','#00b4ff','#fff'];

  function rand(a, b){ return a + Math.random() * (b - a); }

  function Piece(){
    this.x = rand(0, canvas.width);
    this.y = rand(-80, -10);
    this.w = rand(7, 16);
    this.h = rand(4, 9);
    this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
    this.rot = rand(0, Math.PI*2);
    this.vx = rand(-2, 2);
    this.vy = rand(3, 8);
    this.vr = rand(-0.12, 0.12);
    this.alpha = 1;
    this.ttl = rand(120, 220);
    this.age = 0;
  }
  Piece.prototype.update = function(){
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.08;
    this.rot += this.vr;
    this.age++;
    if(this.age > this.ttl - 40) this.alpha = Math.max(0, (this.ttl - this.age)/40);
  };
  Piece.prototype.draw = function(){
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
    ctx.restore();
  };

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces = pieces.filter(p => p.age < p.ttl);
    pieces.forEach(p => { p.update(); p.draw(); });
    if(pieces.length > 0) raf = requestAnimationFrame(loop);
    else { running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }

  window.launchConfetti = function(){
    if(running) return;
    running = true;
    for(let i = 0; i < 160; i++) pieces.push(new Piece());
    raf = requestAnimationFrame(loop);
  };
})();
