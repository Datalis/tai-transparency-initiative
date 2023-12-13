<script lang="ts">
    import { onMount } from "svelte";
  
    // Dot type definition
    type Dot = {
      px: number;
      py: number;
      vx: number;
      vy: number;
      radius: number;
    };

    //RGBA type definition
    type RGB = {
        r: number;
        g: number;
        b: number;
    }
  
    // Constants
    export let height :number;
    export let dotRadius :number;
    export let dotSpeed :number;
    export let dotCount :number;
    export let dotConnectionDistance :number;
    export let color : RGB;
  
    let canvas: HTMLCanvasElement;
    let scene: CanvasRenderingContext2D;
    let width: number;
    let dots: Dot[] = [];
  
    // Calculate the distance between two dots
    function calculateDistance(dot1: Dot, dot2: Dot): number {
      const distX = dot1.px - dot2.px;
      const distY = dot1.py - dot2.py;
      return Math.sqrt(distX * distX + distY * distY);
    }
  
    // Create a new dot
    function createDot(): Dot {
      const dot: Dot = {
        px: Math.random() * (width) + dotRadius,
        py: Math.random() * (height) + dotRadius,
        vx: (Math.random() - 0.5) * dotSpeed,
        vy: (Math.random() - 0.5) * dotSpeed,
        radius: dotRadius,
      };
      return dot;
    }
  
    // Update the position of a dot
    function updateDot(dot: Dot) {
      dot.px += dot.vx;
      dot.py += dot.vy;
  
      if (dot.px + dot.radius > width || dot.px - dot.radius < 0) {
        dot.vx *= -1;
      }
  
      if (dot.py + dot.radius > height || dot.py - dot.radius < 0) {
        dot.vy *= -1;
      }
  
      dots.forEach((otherDot: Dot) => {
        if (dot !== otherDot) {
          const distance = calculateDistance(dot, otherDot);
  
          if (distance < dotConnectionDistance) {
            scene.beginPath();
            scene.moveTo(dot.px, dot.py);
            scene.lineTo(otherDot.px, otherDot.py);
            scene.lineWidth = dotRadius*0.2;
            scene.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${(1 - distance / dotConnectionDistance)})`;
            scene.stroke();
            scene.closePath();
          }
        }
      });
  
      scene.beginPath();
      scene.arc(dot.px, dot.py, dot.radius, 0, Math.PI * 2);
      scene.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
      scene.fill();
      scene.closePath();
    }
  
    onMount(() => {
      if (typeof window !== "undefined") {
        // Code that depends on the `window` object
  
        scene = canvas.getContext("2d") as CanvasRenderingContext2D;
  
        width = canvas.width = window.innerWidth;
        canvas.height = height;
  
        dots = Array.from({ length: dotCount * width * 0.0008 }, createDot);
  
        function draw() {
          scene.clearRect(0, 0, width, height);
  
          dots.forEach((dot: Dot) => {
            updateDot(dot);
          });
  
          requestAnimationFrame(draw);
        }
  
        draw();
  
        window.addEventListener("resize", () => {
          width = canvas.width = window.innerWidth;
        });
      }
    });
  </script>
  
  <canvas class="connecting_dots" bind:this={canvas}></canvas>