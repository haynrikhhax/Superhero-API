import { useState } from "react";
import axios from "axios";

const HeroForm = ({ fetchHeroes }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/superhero", {
        name,
        superpower,
        humilityScore: parseInt(humilityScore),
      });
      fetchHeroes(); // Refresh the hero list after adding a new hero
      setName("");
      setSuperpower("");
      setHumilityScore("");
    } catch (error) {
      console.error("Error adding superhero:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-700 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 className="text-2xl text-white font-semibold">Add a New Superhero</h2>
      <div className="flex flex-col gap-2">
        <label className="text-white">Name</label>
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Superpower</label>
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="text"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Humility Score</label>
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="number"
          min={0}
          max={10}
          value={humilityScore}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value >= 0 && value <= 10) {
              setHumilityScore(value);
            } else {
              alert("Please enter a value between 0 and 10.");
            }
          }}
          required
        />
      </div>
      <button
        className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        type="submit"
      >
        Add Superhero
      </button>
    </form>
  );
};

export default HeroForm;
