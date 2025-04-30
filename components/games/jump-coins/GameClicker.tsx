import { useState } from "react";

type MaterialKey = "wood" | "iron" | "gold" | "diamond" | "ultramatter";

const materials: { name: string; icon: string; rate: number; key: MaterialKey }[] = [
  { name: "Madera", icon: "/games/jump-coins/assets/wood.png", rate: 1, key: "wood" },
  { name: "Hierro", icon: "/games/jump-coins/assets/iron.png", rate: 10, key: "iron" },
  { name: "Oro", icon: "/games/jump-coins/assets/gold.png", rate: 100, key: "gold" },
  { name: "Diamante", icon: "/games/jump-coins/assets/diamond.png", rate: 1000, key: "diamond" },
  { name: "Ultramateria", icon: "/games/jump-coins/assets/ultramatter.png", rate: 10000, key: "ultramatter" },
];

export default function GameClicker() {
  const [counts, setCounts] = useState({
    wood: 0,
    iron: 0,
    gold: 0,
    diamond: 0,
    ultramatter: 0,
  });

  const [multipliers, setMultipliers] = useState({
    wood: 1,
    iron: 1,
    gold: 1,
    diamond: 1,
    ultramatter: 1,
  });

  const handleClick = () => {
    setCounts((prev) => {
      const newCounts = { ...prev };
      newCounts.wood += multipliers.wood;

      // Convert madera a hierro
      if (newCounts.wood >= materials[1].rate) {
        newCounts.wood -= materials[1].rate;
        newCounts.iron += multipliers.iron;
      }

      // Convert hierro a oro
      if (newCounts.iron >= materials[2].rate) {
        newCounts.iron -= materials[2].rate;
        newCounts.gold += multipliers.gold;
      }

      // Convert oro a diamante
      if (newCounts.gold >= materials[3].rate) {
        newCounts.gold -= materials[3].rate;
        newCounts.diamond += multipliers.diamond;
      }

      // Convert diamante a ultramateria
      if (newCounts.diamond >= materials[4].rate) {
        newCounts.diamond -= materials[4].rate;
        newCounts.ultramatter += multipliers.ultramatter;
      }

      return newCounts;
    });
  };

  const handleUpgrade = (material: MaterialKey) => {
    setMultipliers((prev) => ({
      ...prev,
      [material]: prev[material] + 1,
    }));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Clicker de Materiales</h1>

      {/* Botón principal */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          ¡Recolectar!
        </button>
      </div>

      {/* Contadores de materiales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {materials.map((material) => (
          <div
            key={material.name}
            className="border rounded-lg p-4 shadow bg-white flex flex-col items-center"
          >
            <p className="text-gray-600">Cantidad: {counts[material.key]}</p>
            <h2 className="text-xl font-bold">{material.name}</h2>
            <p className="text-gray-600">Cantidad: {counts[material.key]}</p>
            <button
              onClick={() => handleUpgrade(material.key)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Mejorar (+1)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}