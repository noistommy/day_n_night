import React, { useRef, useEffect } from 'react';
import './SplitBall.scss'

// const colorPalette = ['#D75757', '#EE9033', '#F8B825', '#B3BC40', '#61A475', '#8CC5CE', '70A3CA', '#5178AF', '#9180B4', '#9180B4', '#AF77C0', '#A86A82']; //all color
// 'yellow': #F5B54D,
// 'citron': #CAC747,
// 'lime': #85AB39,
// 'green': #48992F,
// 'mint': #3A874F,
// 'teal': #449698,
// 'cyan': #4D9BCC,
// 'blue': #4E7AF8,
// 'indigo': #5642ED,
const colorPalette = ['#F5B54D', '#CAC747', '#85AB39', '#48992F', '#3A874F', '#449698', '4D9BCC'] //, '#4E7AF8', '#5642ED']; 
const width = window.innerWidth / 4;
const height = window.innerHeight;
const origin = {
  x: width / 2,
  y: height / 2,
};

class Ball {
  constructor() {
    this.x = origin.x;
    this.y = origin.y;
    this.angle = Math.PI * 2 * Math.random();
    this.vx = (1.3 + Math.random() * 0.3) * Math.sin(this.angle);
    this.vy = (1.3 + Math.random() * 0.3) * Math.cos(this.angle);
    this.r = 4 + 3 * Math.random();
    this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.r -= 0.005;
  }
}

function SplitBall(props) {
  // const [ctx, setCtx] = useState();
  const canvasRef = useRef(null);
  
  const balls = []
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    canvas.width = width
    canvas.height = height
    function loop() {
      let count = 0;
      let randomCount = 0;
      context.clearRect(0, 0, width, height)
      if(count === randomCount) {
        balls.push(new Ball())
        count = 0;
        randomCount = 1 + Math.floor(Math.random() * 5);
      }
      count++
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i]
      
        context.fillStyle = b.color;
        context.beginPath();
        context.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
        context.fill();
        b.update();
      
      }
      context.fillStyle = '#000';
      context.beginPath();
      context.arc(origin.x, origin.y, 100, 0, Math.PI * 2, false);
      context.fill();
      removeBall()
      requestAnimationFrame(loop)
    }
    loop()
  })
  function removeBall() {
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];
        if (
          b.x + b.r < 0
          || b.x - b.r > width
          || b.y + b.r < 0
          || b.y - b.r > height
          || b.r <= 0
        ) {
          balls.splice(i, 1);
        }
      }
    }
  return (
    <div id="splitBall">
      <canvas ref={canvasRef} id="canvas"></canvas>
      <div id="stats"></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"/>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default SplitBall;