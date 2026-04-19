import { useEffect } from "react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="App">
      <h1>🎉 Welcome 🎉</h1>

      <iframe
        src="https://docs.google.com/spreadsheets/d/1J5E7nezOhJ1N3Xjh1PBjnyjStRyW8-KdwQJtUKRhRGc/edit?gid=2032942343#gid=2032942343"
        width="100%"
        height="100%"
        title="Google Sheet"
      />
    </div>
  );
}

export default App;