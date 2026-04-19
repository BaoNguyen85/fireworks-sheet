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
        src="https://docs.google.com/spreadsheets/d/e/1J5E7nezOhJ1N3Xjh1PBjnyjStRyW8-KdwQJtUKRhRGc/pubhtml"
        width="100%"
        height="600"
        title="Google Sheet"
      />
    </div>
  );
}

export default App;