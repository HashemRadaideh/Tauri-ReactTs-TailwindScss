import { useState } from "react";
import "./App.scss";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container mx-auto flex flex-col justify-center items-center space-y-10">
      <h1 className="pt-10 text-3xl font-bold">Welcome to this template!</h1>

      <span className="columns-6">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo" alt="Tauri logo" />
        </a>
        <a href="https://million.dev/docs/introduction" target="_blank">
          <img src="/million.svg" className="logo" alt="Million logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react.svg" className="logo" alt="React logo" />
        </a>
        <a href="https://sass-lang.com/documentation/" target="_blank">
          <img src="/sass.svg" className="logo" alt="Tailwind logo" />
        </a>
        <a href="https://tailwindcss.com/docs" target="_blank">
          <img src="/tailwind.svg" className="logo" alt="Tailwind logo" />
        </a>
      </span>

      <p className="text-3xl font-bold">
        Click on a logo to learn more about it.
      </p>

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count is {count}
      </button>
    </main>
  );
}
