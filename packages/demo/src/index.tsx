import { createSignal, onCleanup } from "solid-js";
import { render, VElement, createElement } from "solid-canvaskit-renderer";
import Dummy from './Dummy';

const random = () => Math.random() * 360;
const [frames, setFrames] = createSignal(Array(30).fill(0), { equals: false }); // for smoothing out FPS counter

const fps = () =>
  frames().reduce((total, frame) => total + frame) / frames().length;

function App() {

  let last = Date.now();
  let frame = requestAnimationFrame(function loop() {
    frame = requestAnimationFrame(loop);

    // Calculate FPS
    const now = Date.now();
    const elapsed = now - last;
    const f = frames();
    f.shift();
    f[f.length] = 1000 / elapsed;
    setFrames(f);

    last = now;
  });

  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);

  onCleanup(() => cancelAnimationFrame(frame));

  return (
    <Dummy onClick={increment} />
  );
}

const tree = new VElement('root')

render(App, tree);
console.log('[APP] node tree', tree)
