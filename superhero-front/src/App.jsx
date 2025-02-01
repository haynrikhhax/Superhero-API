import React, { useState, useEffect } from "react";
import HeroForm from "./components/HeroForm";
import HeroList from "./components/HeroList";
import axios from "axios";

const App = () => {
  const [heroes, setHeroes] = useState([]);

  const fetchHeroes = async () => {
    try {
      const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
      const response = await axios.get(`${baseUrl}superhero`);
      setHeroes(response.data);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center gap-8 p-4">
      <h1 className="text-4xl text-white font-extrabold">Superhero API</h1>
      <HeroForm fetchHeroes={fetchHeroes} />
      <HeroList heroes={heroes} />
    </div>
  );
};

export default App;
