const HeroList = ({ heroes }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl text-gray-800 font-bold mb-4">Superheroes List</h2>
        <ul className="space-y-2">
          {heroes.map((hero) => (
            <li
              key={hero.name}
              className="bg-gray-100 p-2 rounded-md shadow-sm hover:bg-gray-200"
            >
              {hero.name} - {hero.superpower} - Humility Score: {hero.humilityScore}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default HeroList;
  