import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    let interval;

    // Hàm bắn pháo hoa cầu kỳ
    function fireworkBurst() {
      const colors = [
        '#ff0043', '#14fc56', '#1e90ff', '#ffd700', '#ff7f50', '#00ffff', '#ff69b4', '#ffffff', '#ffa500', '#9400d3'
      ];
      // Bắn nhiều đợt pháo hoa với các thông số khác nhau
      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          confetti({
            particleCount: 80 + Math.floor(Math.random() * 120),
            angle: 60 + Math.random() * 60,
            spread: 55 + Math.random() * 120,
            startVelocity: 40 + Math.random() * 30,
            gravity: 0.7 + Math.random() * 0.3,
            decay: 0.88 + Math.random() * 0.07,
            scalar: 0.8 + Math.random() * 0.7,
            shapes: [Math.random() > 0.5 ? 'circle' : 'square'],
            colors: [
              colors[Math.floor(Math.random() * colors.length)],
              colors[Math.floor(Math.random() * colors.length)]
            ],
            origin: {
              x: 0.1 + Math.random() * 0.8,
              y: 0.2 + Math.random() * 0.5
            }
          });
        }, i * 350);
      }
    }

    // Hiện lời chúc trước, rồi mới bắt đầu pháo hoa
    const startTimeout = setTimeout(() => {
      setShowGreeting(false);
      fireworkBurst();
      interval = setInterval(fireworkBurst, 2500);
    }, 3400);

    // Sau 5s kể từ lúc bắt đầu thì dừng pháo hoa
    const stopTimeout = setTimeout(() => {
      clearInterval(interval);
    }, 7000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <div className="App">
      <div className="hero">
        <h1>🎉 Welcome 🎉</h1>
      </div>

      {showGreeting && (
        <div className="greeting" aria-hidden="true">
          <div className="envelope-scene">
            <div className="envelope">
              <span className="envelope-letter">
                Chúc anh/chị/em một ngày làm việc thật năng suất và vui vẻ
              </span>
              <span className="envelope-back" />
              <span className="envelope-flap" />
              <span className="envelope-front" />
            </div>
          </div>
        </div>
      )}

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