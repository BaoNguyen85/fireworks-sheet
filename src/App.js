import { useEffect } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  useEffect(() => {
    // Hàm bắn pháo hoa cầu kỳ
    function fireworkBurst() {
      const colors = [
        '#ff0043', '#14fc56', '#1e90ff', '#ffd700', '#ff7f50', '#00ffff', '#ff69b4', '#ffffff', '#ffa500', '#9400d3'
      ];
      const shapes = [
        'circle', 'square', 'star', 'heart', 'diamond', 'triangle', 'line'
      ];
      // Đợt pháo hoa đặc sắc: nhiều kiểu, nhiều vị trí, nhiều hiệu ứng
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          // Chọn kiểu pháo hoa đặc biệt
          const style = Math.floor(Math.random() * 4);
          if (style === 0) {
            // Vòng tròn lớn
            for (let j = 0; j < 8; j++) {
              confetti({
                particleCount: 30,
                angle: 45 * j,
                spread: 30,
                startVelocity: 60,
                gravity: 0.5,
                decay: 0.92,
                scalar: 1.2,
                shapes: ['circle'],
                colors: [colors[j % colors.length]],
                origin: { x: 0.5, y: 0.5 }
              });
            }
          } else if (style === 1) {
            // Trái tim giữa màn hình
            confetti({
              particleCount: 120,
              spread: 80,
              startVelocity: 55,
              gravity: 0.6,
              decay: 0.89,
              scalar: 1.1,
              shapes: ['heart'],
              colors: ['#ff69b4', '#ff0043', '#ffd700'],
              origin: { x: 0.5, y: 0.4 }
            });
          } else if (style === 2) {
            // Sao nhiều màu ở các góc
            for (let k = 0; k < 4; k++) {
              confetti({
                particleCount: 40,
                angle: 90 * k + 45,
                spread: 60,
                startVelocity: 50,
                gravity: 0.7,
                decay: 0.91,
                scalar: 1.0,
                shapes: ['star'],
                colors: [colors[(k * 2) % colors.length], colors[(k * 2 + 1) % colors.length]],
                origin: {
                  x: k % 2 === 0 ? 0.2 : 0.8,
                  y: k < 2 ? 0.2 : 0.8
                }
              });
            }
          } else {
            // Pháo hoa hỗn hợp nhiều shape
            confetti({
              particleCount: 180,
              spread: 120,
              startVelocity: 45 + Math.random() * 30,
              gravity: 0.7,
              decay: 0.88 + Math.random() * 0.07,
              scalar: 0.8 + Math.random() * 0.7,
              shapes: [
                shapes[Math.floor(Math.random() * shapes.length)],
                shapes[Math.floor(Math.random() * shapes.length)]
              ],
              colors: [
                colors[Math.floor(Math.random() * colors.length)],
                colors[Math.floor(Math.random() * colors.length)]
              ],
              origin: {
                x: 0.1 + Math.random() * 0.8,
                y: 0.2 + Math.random() * 0.5
              }
            });
          }
        }, i * 350);
      }
    }

    // Lặp lại hiệu ứng pháo hoa mỗi 10 giây
    fireworkBurst();
    const interval = setInterval(fireworkBurst, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>🎉 Welcome 🎉</h1>

      <iframe
        src="https://docs.google.com/spreadsheets/d/1J5E7nezOhJ1N3Xjh1PBjnyjStRyW8-KdwQJtUKRhRGc/edit?gid=2032942343#gid=2032942343"
        width="100%"
        height="1000"
        title="Google Sheet"
      />
    </div>
  );
}

export default App;