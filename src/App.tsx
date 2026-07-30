import { useEffect, useState } from "react";
import { Draw } from "drawesome";
import "drawesome/styles.css";
import "./App.css";

const MOBILE_BREAKPOINT = 680;

function useNarrowScreen() {
  const [narrow, setNarrow] = useState(
    () => window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const onChange = () => setNarrow(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return narrow;
}

export default function App() {
  const narrow = useNarrowScreen();

  return (
    <main className="app">
      <div className="canvas">
        <Draw
          background="transparent"
          look="studio"
          drawWhenMinimized
          placement={narrow ? "left" : "bottom"}
          inset={narrow ? 12 : 24}
          align="center"
          shortcuts={!narrow}
          tooltips={!narrow}
          tools={
            narrow
              ? ["pencil", "pen", "marker", "highlighter", "brush"]
              : undefined
          }
          controls={
            narrow
              ? { undo: true, clear: false, opacity: false, custom: false }
              : undefined
          }
        />
      </div>
    </main>
  );
}
