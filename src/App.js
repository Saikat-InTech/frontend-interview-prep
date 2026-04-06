import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    API();
  }, [input]);

  const API = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setRes(json.recipes);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        {res.map((e) => (
          <p key={e.id}>{e.name}</p>
        ))}
      </div>
    </div>
  );
}
