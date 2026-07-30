import { Draw } from "drawesome";
import "drawesome/styles.css";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <div className="canvas">
        <Draw background="transparent" look="studio" />
      </div>
    </main>
  );
}
